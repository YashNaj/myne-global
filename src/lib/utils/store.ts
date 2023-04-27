import { writable } from "svelte/store";
//the store for myneGlobal client operation

//general global data
export let currentUser = writable('');
export const notifications = writable([]);
export function addNotification(notification) {
  notifications.update((notifications) => [...notifications, notification]);
}
export let cartItems = writable(0);
export let cartTotal = writable(0.00);
export let selectedCard: any = writable();
export let userCards: any = writable();
//card related stores
export let addCard = writable(false);
export let sentCard = writable(false);

//if the store is some basic name, it is a display switch. If it has any other name it is not a display switch but a property of
//the store
//display switch stores
export let transfer = writable(false);
export let stolen = writable(false);
export let certificate = writable(false);
export let documentUpload = writable(false);
