import { PollinationsTextStream } from '@/utils/pollinationsApi'; // Adjust the import path as needed
import { ChatBody } from '@/types/types'; // Keep this import if you use it

export const runtime = 'edge';

export async function GET(req: Request): Promise<Response> {
    try {
        const { inputCode, model, systemPrompt , jsonMode} = (await req.json()) as ChatBody;
         const stream = await PollinationsTextStream(inputCode, model,systemPrompt, jsonMode);
         return new Response(stream);
    } catch (error) {
      console.error(error);
       return new Response('Error', { status: 500 });
    }
}

export async function POST(req: Request): Promise<Response> {
    try {
        const { inputCode, model, systemPrompt, jsonMode } = (await req.json()) as ChatBody;
        const stream = await PollinationsTextStream(inputCode, model, systemPrompt, jsonMode);
        return new Response(stream);
    } catch (error) {
        console.error(error);
        return new Response('Error', { status: 500 });
    }
}
