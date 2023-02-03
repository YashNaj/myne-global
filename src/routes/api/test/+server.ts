import { type RequestHandler } from '@sveltejs/kit';
export const GET : RequestHandler = async() => {        
        const response = {
                message: "This is a test",
        }
        return new Response(JSON.stringify(response));
}
    