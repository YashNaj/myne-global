<script lang="ts">
	import {
		Button,
		Container,
		Head,
		Heading,
		Hr,
		Html,
		Img,
		Link,
		Preview,
		Section,
		Text
	} from 'svelte-email';
	import logo from '$lib/images/white_myne_logo.png'
	const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';
	export let firstName = ''; 
	export let token = '';
	export let origin = '';
	export let href = '';

	const fontFamily =
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

	const main = {
		backgroundColor: '#ffffff'
	};

	const container = {
		margin: '0 auto',
		padding: '20px 0 48px',
		width: '580px'
	};

	const userImage = {
		margin: '0 auto',
		marginBottom: '16px',
		borderRadius: '50%'
	};

	const heading = {
		fontFamily,
		fontSize: '32px',
		lineHeight: '1.3',
		fontWeight: '700',
		color: '#484848'
	};

	const paragraph = {
		fontFamily,
		fontSize: '18px',
		lineHeight: '1.4',
		color: '#484848'
	};

	const review = {
		...paragraph,
		padding: '24px',
		backgroundColor: '#f2f3f3',
		borderRadius: '4px'
	};

	const button = {
		fontFamily,
		backgroundColor: '#002d72',
		borderRadius: '3px',
		color: '#fff',
		fontSize: '18px',
		textDecoration: 'none',
		textAlign: 'center' as const,
		display: 'block',
		width: '100%'
	};

	const link = {
		...paragraph,
		color: '#002d72',
		display: 'block'
	};

	const reportLink = {
		fontFamily,
		fontSize: '14px',
		color: '#9ca299',
		textDecoration: 'underline'
	};

	const hr = {
		borderColor: '#cccccc',
		margin: '20px 0'
	};

	const footer = {
		fontFamily,
		color: '#9ca299',
		fontSize: '14px',
		marginBottom: '10px'
	};
</script>

<Html>
	<Head />
	<Section style={main}>
		<Container style={container}>
			<Img src={logo} width="96" height="30" alt="Myne" />
		
			<Heading style={heading}>Welcome , {firstName}</Heading>
			<Text style={review}>
			Thanks for signing up for Myne, {firstName}. Complete your verification process below.</Text>
			
			<Section style={{ padding: '16px 0 20px' }}>
				<Button pY={19} style={button} href={href}>Verify Email</Button>
			</Section>
			<Hr style={hr} />
			<Text style={footer}>Myne Global</Text>
			<Link href="https://myneglobal.com" style={reportLink}></Link>
		</Container>
	</Section>
</Html>
