import { error, type RequestHandler } from '@sveltejs/kit';
import generateCertificate from '$lib/server/pdf/generateCertificate';

export const GET:  RequestHandler = (async ({ locals, params, setHeaders }) => {
  const { user, session } = await locals.validateUser();
  if (!session) {
    throw error(404, { message: "You must be logged in to access this page" });
  }
  let cardId = params.cardId;
  const pdf = await generateCertificate(cardId)
  setHeaders({
    'Content-Type': 'application/pdf',
    'Content-length': pdf.size.toString(),
    'Last-Modified' :  Date.now().toString(),
    'Cache-Control': 'public, max-age=30'
  })
  return new Response(pdf);
}) satisfies RequestHandler;
