# Gharpayy CRM MVP

A lightweight Lead Management CRM built to demonstrate how property leads can be captured, tracked, and converted efficiently. The system supports lead intake, pipeline management, visit scheduling, and performance tracking for sales agents.

This project was built as part of the **Gharpayy CRM MVP assignment**.

---

## Features

### Lead Capture
- Create leads through a structured intake form
- Stores customer information including move-in date, location, gender, occupation, and lead score
- Automatic timestamp and activity tracking

### Automatic Lead Assignment
- Leads are assigned to agents automatically
- Assignment uses workload balancing (agent with fewest active leads)

### Lead Pipeline
Leads progress through a sales pipeline:

```
New Lead
Contacted
Requirement Collected
Property Suggested
Visit Scheduled
Visit Completed
Booked
Lost
```

Pipeline columns visually organize leads by stage.

### Visit Scheduling
- Schedule property visits
- Select visit date using an interactive calendar
- Record visit outcomes
- Automatically updates lead pipeline stage

### Activity Timeline
Every lead maintains an activity history including:

- Lead creation
- Agent assignment
- Visit scheduling
- Status updates

### Follow-up Reminders
A background service detects inactive leads and flags them for follow-up.

### Dashboard Analytics
Dashboard provides insights including:

- Total leads
- Visits scheduled
- Conversion rate
- Agent performance leaderboard
- Recent lead activity

---

## Tech Stack

### Frontend

```
React
Vite
TailwindCSS
React Router
Material Icons
React Calendar
```

### Backend

```
Node.js
Express
MongoDB
Mongoose
Node Cron
```

### Development Tools

```
Git
ESLint
Postman
MongoDB Compass
```

---

## Project Structure

```
gharpayy-crm/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── seedAgents.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── features/
│   │   │   ├── dashboard/
│   │   │   ├── leads/
│   │   │   └── visits/
│   │   ├── hooks/
│   │   └── utils/
│   └── vite.config.js
│
└── README.md
```

The project follows a **feature-based architecture** on the frontend and a **layered architecture** on the backend.

---

## Setup Instructions

### 1. Clone the Repository

```
git clone <repository-url>
cd gharpayy-crm
```

---

### 2. Install Backend Dependencies

```
cd backend
npm install
```

---

### 3. Start MongoDB

Make sure MongoDB is running locally.

Default connection string:

```
mongodb://127.0.0.1:27017/gharpayyCRM
```

---

### 4. Seed Sample Agents

```
node seedAgents.js
```

This creates sample agents used for automatic lead assignment.

---

### 5. Start Backend Server

```
npm start
```

Server runs on:

```
http://localhost:5000
```

---

### 6. Install Frontend Dependencies

Open a new terminal:

```
cd frontend
npm install
```

---

### 7. Start Frontend

```
npm run dev
```

Application runs on:

```
http://localhost:5173
```

---

## API Endpoints (Summary)

### Leads

```
POST   /api/leads
GET    /api/leads
PATCH  /api/leads/:id
GET    /api/leads/followups
GET    /api/leads/:id/timeline
```

### Visits

```
POST /api/visits
```

### Dashboard

```
GET /api/dashboard
```

---

## Example Workflow

1. Create a lead through the lead form
2. Lead is automatically assigned to an agent
3. Lead appears in the pipeline
4. Schedule a visit
5. Visit outcome updates the pipeline stage
6. Dashboard updates performance metrics

---

## Scalability Considerations

The current MVP is designed for small teams but can be scaled by:

- Introducing Redis + BullMQ for background jobs
- Deploying services using Docker containers
- Using cloud infrastructure such as AWS or GCP
- Adding MongoDB replica sets and sharding
- Integrating WhatsApp Business API for automated lead ingestion

More details are provided in the **system design document**.

---

## Future Improvements

Potential enhancements include:

- Drag-and-drop pipeline movement
- Lead search and filtering
- Real-time notifications
- WhatsApp lead capture integration
- Agent performance analytics dashboards
- Role-based access control

---

## Author

**Khriesezo Peseyie**

This project was developed as part of a technical assignment demonstrating the design and implementation of a scalable lead management CRM.