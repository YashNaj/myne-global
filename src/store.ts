import { writable } from "svelte/store";
//the store for myneGlobal client operation 


//general global data
export let currentUser = writable('');
export const notifications = writable([]);
export function addNotification(notification) {
    notifications.update((notifications) => [...notifications, notification]);
  }
export let selectedCardId = writable('');


//card related stores
export let addCard = writable(false);
export let sentCard = writable(false);



//display switch stores 
export let transfer = writable(false);
export let stolenSwitch = writable(false)

