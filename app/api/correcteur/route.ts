import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI("AIzaSyBGXmWqH9gsjyiTXJCBPLg2s8jgU7YNhU4");

async function chat(data: any) {
  const text = data.text;
  const prompt = `
  Corrige le texte suivant dans sa langue, sans commentaire.
  Texte à traduire : ${text}
  `;
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const textt = response.text();
  return textt;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = await chat(body);
  return new Response(result, {
    headers: {
      "content-type": "text/plain",
    },
  });
}
