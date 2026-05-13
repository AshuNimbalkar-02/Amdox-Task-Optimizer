# 🚀 Amdox AI-Powered Task Optimizer

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Status](https://img.shields.io/badge/Status-Production--Ready-success?style=for-the-badge)]()

**Amdox AI** is a state-of-the-art task optimization platform that leverages real-time emotion detection and data science to enhance workplace productivity and employee well-being. By aligning your task list with your current emotional state, Amdox ensures you work on the right things at the right time.

---

## ✨ Key Features

### 1. 🎥 Real-Time Emotion Monitor
- **Live Camera Feed**: Integrated webcam support to analyze facial expressions in real-time.
- **Sentiment Analysis**: Analyzes text inputs to determine the user's emotional baseline (Happy, Neutral, Stressed, Burnout).
- **Dynamic AI Overlay**: Visual scanning animations providing instant feedback on emotional states.

### 2. 🧠 Smart Task Recommendation Engine
- **Cognitive Load Balancing**: Automatically prioritizes tasks based on detected energy levels.
- **Dynamic Advice**: Provides personalized productivity tips (e.g., "Peak performance detected! Great time for complex problem-solving").
- **Mood-Task Mapping**: Hard tasks for high morale; easy/admin tasks during high stress.

### 3. 📊 Advanced Analytics & Well-being
- **Historical Trends**: interactive Area Charts tracking Mood vs. Stress over time.
- **Productivity Index**: Weekly breakdown of efficiency scores.
- **Well-being Scores**: Holistic health tracking (84/100) including sleep and activity metrics.
- **Recovery Suggestions**: AI-powered recommendations like "Box Breathing" or "Mental Resets."

### 4. 🚨 Alerts & Team Morale
- **Burnout Prevention**: Automatic detection of prolonged stress patterns.
- **Manager Dashboard**: Centralized alert system to notify HR or managers for proactive support.

---

## 🏗️ Technical Architecture

The project follows a **Production-Grade Modular Architecture** designed for scalability and performance:

```text
src/
├── app/              # Next.js App Router (Pages, Layouts, API Routes)
├── components/       # Atomic UI Library (Modular & Reusable Components)
├── hooks/            # Custom React Hooks (State logic, API calls)
├── services/         # Data Fetching & Business Logic
├── styles/           # Global Design Tokens & Glassmorphism System
├── utils/            # Helper Utilities & Formatting
└── models/           # TypeScript Interfaces & Data Definitions
```

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Vanilla CSS + CSS Modules (Custom Design System) |
| **AI Integration** | MediaDevices API + Simulated Sentiment Logic |
| **Data Viz** | Recharts (Responsive Area, Bar, & Pie Charts) |
| **Icons** | Lucide React |
| **Animations** | CSS Keyframes + Transition Tokens |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/amdox-task-optimizer.git
   ```
2. **Navigate to the directory**:
   ```bash
   cd amdox-task-optimizer
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```
5. **Open the app**:
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🔒 Security & Privacy
- **Client-Side Processing**: Camera data is processed locally to ensure maximum privacy.
- **Anonymization**: Team analytics are aggregated and anonymized before being visible to managers.

## 📄 License
Distributed under the **MIT License**. See `LICENSE` for more information.

## 📧 Contact
Project Support: [support@amdox.in](mailto:support@amdox.in)

---
*Created with ❤️ for the Amdox Internship Project*
