
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  // In a real app, this would be handled more gracefully.
  // For this context, we assume the key is available.
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const generateDescription = async (productName: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API Key not configured. Please set the API_KEY environment variable.";
  }
  
  try {
    const prompt = `Generate a captivating, brief, and appealing product description for a flower product named "${productName}". The description should be suitable for an e-commerce website. Focus on the emotional aspect and appearance of the flowers. Do not use markdown.`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error generating description from Gemini API:", error);
    return "Failed to generate description. Please try again.";
  }
};
   