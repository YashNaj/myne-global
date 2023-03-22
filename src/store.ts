import { writable } from "svelte/store";
export let transfer = writable(false);
export let sentCard = writable(false);
export let addCard = writable(false);
export let currentUser = writable('');
export let selectedCardId = writable('');

