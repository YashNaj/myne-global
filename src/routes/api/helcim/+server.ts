import { json, type RequestHandler } from "@sveltejs/kit";
import { VITE_HELCIM_ACCOUNT_ID, VITE_HELCIM_API_KEY } from "$env/static/private";
const options = {
    method: 'POST',
    headers: {
      accept: 'application/xml',
      'account-id': VITE_HELCIM_ACCOUNT_ID,
      'api-token': VITE_HELCIM_API_KEY
    }
  };
  
  fetch('https://secure.myhelcim.com/api/account-info', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
export const GET: RequestHandler = async  ({req, res}) =>{

}