import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not set in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const getExpertAdvice = async (query: string): Promise<string> => {
  const client = getClient();
  if (!client) return "I'm unable to connect to the expert system right now. Please check your API key configuration.";

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: "You are an expert aquarist and farmer for 'efarm'. You specialize in fish care (Guppy, Molly, Platy, Goldfish, Gourami, Betta), aquatic plants, and poultry farming. Provide helpful, concise, and friendly advice to customers looking to buy or care for these items. Keep answers under 100 words if possible.",
      }
    });
    return response.text || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Error fetching expert advice:", error);
    return "Sorry, our expert system is currently unavailable. Please try calling us directly.";
  }
};