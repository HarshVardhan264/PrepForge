# PrepForge

PrepForge is an AI-powered interview preparation platform that helps candidates evaluate their readiness for a specific job role and provides a structured preparation plan.

By analyzing a candidate’s resume, job description, and self-description, PrepForge generates an interview readiness report that includes technical questions, behavioral questions, skill gap analysis, and a personalized preparation roadmap.

The goal is to help candidates move from uncertain preparation → targeted improvement → confident interviews.

---

## How PrepForge Works

PrepForge analyzes three main inputs:

- **Job Description** – Requirements and expectations for the role
- **Resume** – Candidate’s background and skills
- **Self Description** – Candidate’s own explanation of experience and strengths

Using these inputs, the system generates an **Interview Report** containing insights and preparation guidance.

---

## Interview Report Structure

Each generated report includes multiple sections designed to help the candidate prepare effectively.

### 1. Match Score

A score between 0–100 that indicates how well the candidate's profile aligns with the job requirements.  This helps candidates quickly understand how competitive they are for a role.

### 2. Technical Questions

A list of role-specific technical questions designed to simulate what might be asked in real interviews.

Each question contains:

- **Question** – The technical interview question
- **Intention** – What the interviewer is evaluating
- **Answer** – Suggested explanation or approach

This helps candidates understand both the question and the reasoning behind it.

### 3. Behavioral Questions

Behavioral questions evaluate communication, teamwork, and problem-solving ability.

Each behavioral question includes:

- Question
- Intention
- Answer guidance

These questions help candidates prepare structured responses for common interview scenarios.

### 4. Skill Gap Analysis

PrepForge identifies missing or weak skills relative to the job description.

Each skill gap includes:

- **Skill Name**
- **Severity Level** – Low / Medium / High

This helps candidates focus on the most important improvements first.

### 5. Preparation Plan

PrepForge generates a day-wise preparation roadmap.

Each day includes:

- Day number
- Focus area
- Tasks to complete

Example:

```
Day 1
Focus: Data Structures
Tasks:

  - Review arrays and hashing
  - Solve 3 interview problems
  - Practice explanation of solutions
```

This structure ensures that preparation is organized and actionable.

---

## ATS-Friendly Resume Generation

In addition to interview preparation, PrepForge offers an **ATS-friendly resume generation** feature that creates a tailored, downloadable PDF resume optimized for Applicant Tracking Systems.

### How It Works

After generating an interview report, users can download a customized resume that:

- **Incorporates job-specific keywords** from the job description to improve ATS compatibility
- **Highlights relevant experience** and skills that match the target role
- **Maintains professional formatting** suitable for both human recruiters and ATS parsing
- **Is concise and well-structured** (ideally 1 page) for maximum impact

The generated resume is based on the same inputs (resume, job description, and self-description) used for the interview report, ensuring consistency and relevance.

---

## Key Features

- Job-specific interview preparation
- Technical and behavioral question generation
- Skill gap analysis
- Personalized preparation roadmap
- Interview readiness score
- **ATS-friendly resume generation and download**

---

## Project Structure

The project is organized using a modular architecture.  Each component such as Backend, AI services, and Frontend is organized in separate folders with their own dependencies and configurations.

```
PrepForge/
├── Backend/        # Node.js/Express API and AI service integrations
├── Frontend/       # React/Vite application
└── README.md       # This top-level overview (PrepForge)
```

---

## Use Cases

PrepForge is useful for:

- Students preparing for technical interviews
- Developers applying to specific roles
- Candidates wanting structured preparation guidance
- Anyone looking for AI-assisted interview preparation

---
