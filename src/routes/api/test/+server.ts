import { RequestEvent } from '@sveltejs/kit';
export const GET : RequestHandler = async({event}: RequestEvent) => {        
        const response = {
                message: "This is a test",
        }
        return new Response(JSON.stringify(response));
}
    