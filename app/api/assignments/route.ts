import { NextRequest, NextResponse } from 'next/server';
import { getAssignments, createAssignment } from '@/lib/db';

export async function GET() {
  try {
    const assignments = getAssignments();
    return NextResponse.json({ success: true, data: assignments }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, dueDate, status } = body;

    if (!title || !dueDate) {
      return NextResponse.json(
        { success: false, message: 'title and dueDate are required' },
        { status: 400 }
      );
    }

    const validStatuses = ['Created', 'On Process', 'Submitted'];
    if (status && !validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, message: 'status must be one of: Created, On Process, Submitted' },
        { status: 400 }
      );
    }

    const newAssignment = createAssignment({ title, description, dueDate, status });
    return NextResponse.json({ success: true, data: newAssignment }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Invalid request body' }, { status: 400 });
  }
}