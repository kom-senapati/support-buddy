import { type CoreMessage, streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const openai = createOpenAI({
    baseURL: process.env.AI_ENDPOINT_URL,
    apiKey: process.env.AI_API_KEY,
  });

  const model = openai("gpt-3.5-turbo");

  const result = await streamText({
    model: model,
    system: "You are a helpful assistant.",
    messages,
  });

  return result.toAIStreamResponse();
}
