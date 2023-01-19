import { json, type RequestHandler } from "@sveltejs/kit";
import {SENDGRID_API_KEY } from "$env/static/private"
import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


export const GET = async  () => {
  const msg = {
    to: 'test@example.com', // Change to your recipient
    from: 'test@example.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  console.log("Form submitted");
  const output = await sgMail.send(msg);
return new Response(JSON.stringify(output))
}
