import { render } from 'svelte-email';
import sendgrid from '@sendgrid/mail';
import SignUpEmail from '$lib/components/SignUpEmail.svelte';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const emailHtml = render({
	template: SignUpEmail,
	props: {
		name: 'Svelte'
	}
});

const options = {
    to: 'pinelarno@yahoo.com', // Change to your recipient
    from: "support@myneglobal.com", // Change to your verified sender
    subject: "Verify your Myne Global Account",
    html: emailHtml,
};

sendgrid.send(options);
