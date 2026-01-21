import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Your code
const model = openai("gpt-3.5-turbo");

export const chat = async(prompt: string) => {
 const { text } = await generateText({
 model,
 prompt
 })
 return text;
}

// Execution
const result = await chat("what is value of pi ?");
console.log("Result: ", result);