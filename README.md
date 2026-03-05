# Vickel Assignment Log Book App

REST API built with Next.js + TypeScript.

## Schema

| Field | Description |
|-------|-------------|
| `id` | Auto-generated unique ID |
| `title` | Assignment title |
| `description` | Assignment description |
| `assignmentDate` | Auto-generated from system when created |
| `dueDate` | Due date (set by user) |
| `status` | `Created` / `On Process` / `Submitted` |

## API Design Table

| Method | Endpoint | Description | Request Body | Success | Error |
|--------|----------|-------------|--------------|---------|-------|
| GET | `/api/assignments` | Get all assignments | None | 200 | 500 |
| POST | `/api/assignments` | Create new assignment | `{ title, dueDate, description?, status? }` | 201 | 400 |
| GET | `/api/assignments/:id` | Get assignment by ID | None | 200 | 404 |
| PUT | `/api/assignments/:id` | Update assignment | `{ title?, description?, dueDate?, status? }` | 200 | 404 / 400 |
| DELETE | `/api/assignments/:id` | Delete assignment | None | 200 | 404 |

## Test Table

| Endpoint | Method | API Endpoint Description | Scenario | Requirement | Expected Output | Actual Output | Test Status |
|----------|--------|--------------------------|----------|-------------|-----------------|---------------|-------------|
| `/api/assignments` | GET | Get all assignments | Success | None | Status: 200 `{ success: true, data: [...] }` | | |
| `/api/assignments` | GET | Get all assignments | Error | Server fails | Status: 500 `{ success: false, message: "Server error" }` | | |
| `/api/assignments` | POST | Create new assignment | Success | `{ title, dueDate }` | Status: 201 `{ success: true, data: { id, title, description, assignmentDate, dueDate, status } }` | | |
| `/api/assignments` | POST | Create new assignment | Error | Missing `title` | Status: 400 `{ success: false, message: "title and dueDate are required" }` | | |
| `/api/assignments` | POST | Create new assignment | Error | Missing `dueDate` | Status: 400 `{ success: false, message: "title and dueDate are required" }` | | |
| `/api/assignments` | POST | Create new assignment | Error | Invalid `status` | Status: 400 `{ success: false, message: "status must be one of: Created, On Process, Submitted" }` | | |
| `/api/assignments/:id` | GET | Get assignment by ID | Success | Valid ID | Status: 200 `{ success: true, data: { id, title, ... } }` | | |
| `/api/assignments/:id` | GET | Get assignment by ID | Error | Invalid ID | Status: 404 `{ success: false, message: "Assignment not found" }` | | |
| `/api/assignments/:id` | PUT | Update assignment | Success | Valid ID + body | Status: 200 `{ success: true, data: { id, title, ... } }` | | |
| `/api/assignments/:id` | PUT | Update assignment | Error | Invalid ID | Status: 404 `{ success: false, message: "Assignment not found" }` | | |
| `/api/assignments/:id` | PUT | Update assignment | Error | Invalid `status` | Status: 400 `{ success: false, message: "status must be one of: Created, On Process, Submitted" }` | | |
| `/api/assignments/:id` | DELETE | Delete assignment | Success | Valid ID | Status: 200 `{ success: true, message: "Assignment deleted" }` | | |
| `/api/assignments/:id` | DELETE | Delete assignment | Error | Invalid ID | Status: 404 `{ success: false, message: "Assignment not found" }` | | |

## Getting Started

```bash
npx create-next-app@latest vickel-assignment-logbook --typescript
cd vickel-assignment-logbook
npm install swagger-ui-react swagger-jsdoc next-swagger-doc
npm run dev
```

## Swagger Docs
Visit: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)