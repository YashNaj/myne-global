import { error, type RequestHandler } from '@sveltejs/kit';
import { selectedCard } from '../../../store';
import generateCertificate from '$lib/server/pdf/generateCertificate';

export const GET:  RequestHandler = async ({ locals, params, setHeaders }) => {
  const { user, session } = await locals.validateUser();
  if (!session) {
    throw error(404, { message: "You must be logged in to access this page" });
  }
  const pdf = await generateCertificate()
  setHeaders({
    'Content-Type': 'application/pdf',
    'Content-length': pdf.size.toString(),
    'Last-Modified' :  Date.now().toString(),
    'Cache-Control': 'public, max-age=600'
  })
  return new Response(pdf);
};
