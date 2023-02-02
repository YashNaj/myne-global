


/// <reference types="lucia-auth" />
declare namespace Lucia {
	type Auth = import('$lib/auth/lucia').Auth;
	type UserAttributes = {
		id: string,
		email:string,
		valid: boolean
		role: string[]; 
	}
}
/// <reference types="@sveltejs/kit" />
declare namespace App {
	interface Locals {
		validate: import("@lucia-auth/sveltekit").Validate;
		validateUser: import("@lucia-auth/sveltekit").ValidateUser;
		setSession: import("@lucia-auth/sveltekit").SetSession;
	}
}