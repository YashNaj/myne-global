import { json, type RequestHandler, error } from "@sveltejs/kit";
import { SENDGRID_API_KEY } from "$env/static/private";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(VITE_SENDGRID_API_KEY);

export const POST: RequestHandler = async () => {
  let data = await req.body;
  console.log(data);
  await sgMail.send(data).then(console.log("success")).catch(error);
  return new Response("success", {staus: 200})
};
