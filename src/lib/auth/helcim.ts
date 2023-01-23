import {VITE_HELCIM_API_KEY , VITE_HELCIM_ ACCOUNT_ID} from '$env/static/private';
const sdk = require('api')('@helcimdevdocs/v1.0#jno16l30z22zy');
try{
    await sdk.auth(VITE_HELCIM_ACCOUNT_ID);
    sdk.auth(VITE_HELCIM_API_KEY);
}
catch(e){
    console.error(e);
}
try{
    console.log('Retireving Account Info...')
    await sdk.retrieveAccountInfo({accept: 'application/xml'})

}
catch(e){
    console.error(e);
}
finally(data){
console.log(data);
}