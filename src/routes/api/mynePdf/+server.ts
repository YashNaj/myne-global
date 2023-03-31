import { error, type RequestHandler } from '@sveltejs/kit';
import generateCertificate from '$lib/server/pdf/generateCertificate';
import { selectedCard } from "$lib/store";
export const POST:  RequestHandler = (async ({ locals, params, setHeaders, body }) => {
  const { user, session } = await locals.validateUser();
  if (!session) {
    throw error(404, { message: "You must be logged in to access this page" });
  }
  console.log("certificate post body", body);
  // const card = JSON.parse(body);
  // const cardId = card.id;
  const pdf = await generateCertificate()
  setHeaders({
    'Content-Type': 'application/pdf',
    'Content-length': pdf.size.toString(),
    'Last-Modified' :  Date.now().toString(),
    'Cache-Control': 'public, max-age=30'
  })
  return new Response(pdf);
}) satisfies RequestHandler;
