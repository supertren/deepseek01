import OpenAI from "openai";
import { config } from "dotenv";

config();
const openai = new OpenAI({
  baseURL: process.env.DEEPSEEK_BASE_URL,
  apiKey: process.env.DEEPSEEK_API_KEY,
});
export default openai;
