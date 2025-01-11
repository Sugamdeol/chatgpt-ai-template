// app/api/route.ts
import { PollinationsTextStream } from '@/utils/chatStream';
import { ChatBody } from '@/types/types';

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
