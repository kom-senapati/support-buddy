import { type CoreMessage, streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import PromptData from "@/prompt.json";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const openai = createOpenAI({
    baseURL: process.env.AI_ENDPOINT_URL,
    apiKey: process.env.AI_API_KEY,
  });

  const model = openai("gpt-3.5-turbo");

  const systemMessage = `
  Application Name : ${PromptData.name}
  Application Description : ${PromptData.description}
  ${PromptData.prompt}
  `;

  const result = await streamText({
    model: model,
    system: systemMessage,
    messages,
  });

  return result.toAIStreamResponse();
}
