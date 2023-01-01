import PocketBase from "pocketbase";

console.log(import.meta.env.PROD ? 'production' : 'development');

let frontendUiUrl: string;
let backendUrl: string;

if (import.meta.env.DEV) {
    frontendUiUrl = 'http://127.0.0.1:5173';
    backendUrl = 'http://127.0.0.1:8090';
} else {
    frontendUiUrl = backendUrl = 'https://no-ex.it';

}
const redirectUrl = frontendUiUrl + '/redirect';
const pb = new PocketBase(backendUrl);

export default pb;
export {redirectUrl};