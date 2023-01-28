import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
 
export const POST = (async (event) => {
  return json({
    // get a specific field's value
    name: body.get('name') ?? 'world'
  });
}) satisfies RequestHandler;
