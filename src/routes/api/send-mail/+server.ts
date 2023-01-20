import { json, type RequestHandler, error } from "@sveltejs/kit";
import { SENDGRID_API_KEY } from "$env/static/private";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(SENDGRID_API_KEY);

export const GET: RequestHandler = async () => {
  const msg = {
    to: "yashalnajeeb@gmail.com", // Change to your recipient
    from: "support@myneglobal.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  await sgMail.send(msg).then(console.log("success")).catch(error);
  return new Response("success", {staus: 200})
};
``;
