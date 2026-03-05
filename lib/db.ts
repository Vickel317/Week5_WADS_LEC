let assignments = [
  {
    id: '1',
    title: 'REST API Assignment',
    description: 'Build a REST API using Next.js',
    assignmentDate: '2026-03-01',
    dueDate: '2026-03-10',
    status: 'Created',
  },
  {
    id: '2',
    title: 'UI Design',
    description: 'Design a UI mockup',
    assignmentDate: '2026-03-02',
    dueDate: '2026-03-15',
    status: 'On Process',
  },
];
let nextId = 3;

export function getAssignments() {
  return assignments;
}

export function getAssignmentById(id: string) {
  return assignments.find((a) => a.id === id) ?? null;
}

export function createAssignment(data: {
  title: string;
  description?: string;
  dueDate: string;
  status?: string;
}) {
  const newItem = {
    id: String(nextId++),
    title: data.title,
    description: data.description ?? '',
    assignmentDate: new Date().toISOString().split('T')[0],
    dueDate: data.dueDate,
    status: data.status ?? 'Created',
  };
  assignments.push(newItem);
  return newItem;
}

export function updateAssignment(id: string, data: {
  title?: string;
  description?: string;
  dueDate?: string;
  status?: string;
}) {
  const index = assignments.findIndex((a) => a.id === id);
  if (index === -1) return null;
  assignments[index] = { ...assignments[index], ...data, id };
  return assignments[index];
}

export function deleteAssignment(id: string) {
  const index = assignments.findIndex((a) => a.id === id);
  if (index === -1) return null;
  const [deleted] = assignments.splice(index, 1);
  return deleted;
}