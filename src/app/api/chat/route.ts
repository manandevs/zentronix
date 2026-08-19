// app/api/chat/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: { message: "Prompt is required" } },
        { status: 400 }
      );
    }


    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": process.env.GEMINI_API_KEY || "",
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [
              {
                text: "You are Zentronix AI, an elite enterprise neural intelligence assistant created by Zentorex. You provide exceptionally clear, expert, well-structured, and accurate technical, analytical, and operational guidance. Format your responses professionally with clear headings, bullet points, and actionable insights."
              }
            ]
          },
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "No response generated.";
    
    return NextResponse.json({ message: text });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: { message: "Internal server error connecting to neural core." } },
      { status: 500 }
    );
  }
}