import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

let genAI = null; // Initialize genAI outside the function for lazy initialization

async function runGemini(prompt) {
    try {
        // Lazy initialization of genAI
        if (!genAI) {
            const apiKey = process.env.GEMINI_API_KEY;
            if (!apiKey) {
                console.error("GEMINI_API_KEY environment variable not set. Please configure it.");
                throw new Error("GEMINI_API_KEY environment variable not set. Please configure it.");
            }
            genAI = new GoogleGenerativeAI(apiKey);
        }

        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash-exp",
            systemInstruction: "Talk like a Guide(Youre a bot for a webapp LawAI) related to indian law system and prevention of frauds in contracts/aggrements/documents\ndont talk about anything else dodge question by saying \"Sorry I am unable to answer such questions, feel free to ask anything about the current law system or if you need any help regarding our website feel free to ask!\" ",
        });
        
        const generationConfig = {
            temperature: 1,
            topP: 0.95,
            topK: 40,
            maxOutputTokens: 8192,
            responseMimeType: "text/plain",
        };
        
        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });
        
        const result = await chatSession.sendMessage(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Error in Gemini API call:", error);
        throw new Error(`Gemini API error: ${error.message}`);
    }
}

export { runGemini };