import { GoogleGenAI } from 'n';
import dotenv from "dotenv"
dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
    const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-001',
        contents: 'Just Return me a json object with a file key val that contains the necessary file and corresponding code for building a nextjs application with a cool homepage  na dgive me eacha nd every file necessary for nextjs application',
    });
    console.log(response.text);
}

main();