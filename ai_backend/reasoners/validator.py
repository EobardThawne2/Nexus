import os
import json
from uuid import UUID
from supabase import create_client
from ai_backend.core import agent, emit_thought
from ai_backend.schemas import InterviewQuestions, ValidationEvaluation

SUPABASE_URL = os.environ.get("SUPABASE_URL", "")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY", "")
db = create_client(SUPABASE_URL, SUPABASE_KEY)

@agent.reasoner(name="validator_generate_questions")
async def generate_questions(match_id: str, profile_skills: list, top_repos: list = None) -> InterviewQuestions:
    emit_thought("VALIDATOR", match_id, "Synthesizing tailored technical questions...")

    system_prompt = (
        "You are VALIDATOR, an expert technical interviewer AI. "
        "Based on the candidate's core skills and top GitHub repositories, "
        "generate exactly 3 highly technical, tailored interview questions to test their true depth of knowledge."
    )
    user_prompt = f"Candidate Skills: {profile_skills}\nTop Repos: {top_repos}"

    iq = await agent.ai(
        system=system_prompt,
        user=user_prompt,
        schema=InterviewQuestions
    )

    try:
        db.table("validations").insert({
            "match_id": match_id,
            "questions": iq.questions,
            "status": "pending_answers"
        }).execute()
        emit_thought("VALIDATOR", match_id, "Generated questions stored successfully.")
    except Exception as e:
        emit_thought("VALIDATOR", match_id, f"Failed to insert validation record: {e}")

    return iq

@agent.reasoner(name="validator_evaluate_answers")
async def evaluate_answers(match_id: str, validation_id: str, questions: list, answers: list) -> ValidationEvaluation:
    emit_thought("VALIDATOR", match_id, "Evaluating submitted answers...")

    system_prompt = (
        "You are VALIDATOR, an expert technical interviewer AI. "
        "Evaluate the candidate's answers to the technical questions. "
        "Output a fair validation_score between 0.0 and 1.0 based on technical accuracy and depth."
    )
    user_prompt = f"Questions:\n{json.dumps(questions)}\n\nAnswers:\n{json.dumps(answers)}"

    evaluation = await agent.ai(
        system=system_prompt,
        user=user_prompt,
        schema=ValidationEvaluation
    )

    emit_thought("VALIDATOR", match_id, f"Validation score computed: {evaluation.validation_score * 100:.0f}%")

    try:
        db.table("validations").update({
            "answers": answers,
            "validation_score": evaluation.validation_score,
            "status": "scored"
        }).eq("id", validation_id).execute()
    except Exception as e:
        emit_thought("VALIDATOR", match_id, f"Failed to update validation record: {e}")

    return evaluation
