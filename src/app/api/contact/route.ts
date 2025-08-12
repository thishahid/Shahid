// app/contact/route.ts
import { NextResponse } from "next/server";

// Temporary in-memory storage (replace with DB in production)
let contactMessages: {
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}[] = [];

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields (name, email, subject, message) are required." },
        { status: 400 }
      );
    }

    // Save message
    const newMessage = {
      name,
      email,
      subject,
      message,
      date: new Date().toISOString(),
    };

    contactMessages.push(newMessage);

    return NextResponse.json(
      { success: true, message: "Contact message stored successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to store contact message." },
      { status: 500 }
    );
  }
}

// Optional: GET route to see stored messages
export async function GET() {
  return NextResponse.json(contactMessages);
}