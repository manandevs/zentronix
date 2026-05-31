// app/api/chat/route.ts
import { NextResponse } from "next/server";

const MODEL_MAP: Record<string, string> = {
  "google/gemini-2.0-flash-001": "gemini-2.0-flash",
  "google/gemini-1.5-flash-latest": "gemini-1.5-flash-latest",
  "google/gemini-1.5-pro-latest": "gemini-1.5-pro-latest",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, model } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: { message: "Prompt is required" } },
        { status: 400 }
      );
    }

    const geminiModel = MODEL_MAP[model] ?? "gemini-2.0-flash";

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${geminiModel}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": process.env.GEMINI_API_KEY || "",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "No response";
    

    return NextResponse.json({ message: text });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: { message: "Internal server error" } },
      { status: 500 }
    );
  }
}