# Nexus OS v2.0
**Autonomous Team Assembly Infrastructure**

Nexus is a next-generation technical hiring and talent routing infrastructure. It leverages highly specialized AI agents to rigorously analyze candidate profiles, conduct architectural interviews, and instantly route talent based on cryptographic validation.

## Architecture Overview

The system is designed with a strict separation of concerns, utilizing a high-performance backend to manage agent workloads and a fluid, responsive frontend for the user experience.

### Backend (Python / FastAPI)
* **Framework**: FastAPI for asynchronous, non-blocking API endpoints.
* **Agent Infrastructure**: Powered by AgentField, orchestrating specialized cognitive nodes (Gateway, Synapse, Cortex, Validator).
* **Database**: Neon (PostgreSQL) for transactional data and Supabase for user authentication and state management.
* **AI Models**: Integration with external LLM APIs for deep architectural analysis and query generation.

### Frontend (React / Vite)
* **Framework**: React 19 running on Vite for rapid compilation and optimized production builds.
* **Routing**: React Router DOM for Single Page Application (SPA) navigation.
* **UI/UX**: Strict, deliberate design system utilizing Vanilla CSS and Framer Motion for premium micro-interactions and layout transitions.

---

## Prerequisites

Ensure the following dependencies are installed on your local machine before proceeding:
* Node.js (v18 or higher)
* Python (v3.10 or higher)
* npm or yarn package manager

---

## Environment Configuration

You will need to configure environment variables for the backend to connect to the required databases and AI services.

Create a `.env` file in the root of the project directory with the following structure:

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_service_role_key

# Neon Database Configuration
NEON_DSN=your_neon_postgres_connection_string

# AI Provider Configuration
GROQ_API_KEY=your_groq_api_key
```

*Note: The frontend does not currently require local environment variables as it connects directly to the local backend API.*

---

## Startup Guide

The application requires both the backend API and the frontend client to be running simultaneously.

### 1. Initialize the Backend

Open a terminal session, navigate to the root directory of the project, and execute the following commands:

```bash
# Install Python dependencies
pip install -r requirements.txt

# Start the FastAPI server using Uvicorn
uvicorn api.main:app --reload --host 0.0.0.0 --port 8000
```
The backend API will now be available at `http://localhost:8000`.

### 2. Initialize the Frontend

Open a separate terminal session, navigate to the frontend directory, and execute the following commands:

```bash
cd frontend

# Install Node.js dependencies
npm install

# Option A: Start the development server
npm run dev

# Option B: Build and preview the production bundle (Recommended for performance testing)
npm run build
npm run preview
```
The frontend client will now be accessible via the URL provided in your terminal (typically `http://localhost:5173` for development or `http://localhost:4173` for preview).

---

## Project Structure

```text
Nexus/
├── api/
│   └── main.py                 # FastAPI application entry point and router
├── ai_backend/
│   ├── core.py                 # Core database connections and Agent instantiation
│   ├── orchestrator.py         # Main AI pipeline logic
│   ├── schemas.py              # Pydantic data validation models
│   ├── reasoners/              # Cognitive agent logic (Cortex, Synapse, Validator)
│   └── skills/                 # Agent tools (GitHub/LinkedIn scrapers)
├── frontend/
│   ├── src/
│   │   ├── components/         # Reusable UI components (Navbar, Footer)
│   │   ├── pages/              # Primary route views (Landing, Dashboard, Onboarding, etc.)
│   │   ├── App.tsx             # Core routing and transition wrappers
│   │   └── main.tsx            # React application entry point
│   ├── index.css               # Global design tokens and styling
│   └── package.json            # Frontend dependency manifest
└── requirements.txt            # Python dependency manifest
```

## Security & Telemetry
Nexus handles sensitive candidate data. Ensure that your `NEON_DSN` and `SUPABASE_KEY` are never committed to version control. The agent thought-logs utilize deterministic state updates; altering the `thought_logs` schema requires corresponding updates to the Server-Sent Events (SSE) streaming logic in `api/main.py`.
