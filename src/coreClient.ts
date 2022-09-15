import { GraphClient } from "./graphClientInit";
import "cross-fetch/polyfill"
import { Client } from "@microsoft/microsoft-graph-client";

import { SimpleAuthenticationProvider } from "@microsoft/microsoft-graph-client";



export function init(accessToken:string){


const simpleAuthenticationProvider = new SimpleAuthenticationProvider(async () => {
		return accessToken;
	});
const graphCoreClient = Client.init({
	authProvider: simpleAuthenticationProvider,
});

return graphCoreClient
}