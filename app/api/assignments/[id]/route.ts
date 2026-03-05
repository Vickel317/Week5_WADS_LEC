import { NextRequest, NextResponse } from 'next/server';
import { getAssignmentById, updateAssignment, deleteAssignment } from '@/lib/db';

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const assignment = getAssignmentById(id);
    if (!assignment) {
      return NextResponse.json({ success: false, message: 'Assignment not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: assignment }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { title, description, dueDate, status } = body;

    const validStatuses = ['Created', 'On Process', 'Submitted'];
    if (status && !validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, message: 'status must be one of: Created, On Process, Submitted' },
        { status: 400 }
      );
    }

    const updated = updateAssignment(id, { title, description, dueDate, status });
    if (!updated) {
      return NextResponse.json({ success: false, message: 'Assignment not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: updated }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Invalid request body' }, { status: 400 });
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const deleted = deleteAssignment(id);
    if (!deleted) {
      return NextResponse.json({ success: false, message: 'Assignment not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: 'Assignment deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}