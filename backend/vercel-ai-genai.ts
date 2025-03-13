import { createGoogleGenerativeAI, google } from '@ai-sdk/google';
import dotenv from "dotenv";
dotenv.config();
import { generateText } from 'ai';


const googleAI = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY
});


async function main(){
  const result = await generateText({
    model: googleAI('gemini-1.5-flash'),
    messages: [
      {
        role: 'user',
        content: [
          // {
          //   type: 'text',
          //   text: 'Just Return me a json object with a file key val that contains the necessary file and corresponding code for building a nextjs application with a cool homepage and give me each and every file necessary for nextjs application and also help me how to format this code and display it in the monaco editor and push it to the webcontainer so we need to format the code remove /n and all and then push and display the code',
          // }
          {
            type: 'text',
            text: 'Just Return me a json object with a file key val that contains the necessary file and corresponding code for building a nextjs application with a cool homepage give me each nd every file necessary for nextjs application'
          }
        ],
      },
    ],
  });
  console.log(result);
}
main();