
import "cross-fetch/polyfill"
import { Client } from "@microsoft/microsoft-graph-client";

const baseUrl = "https://graph.microsoft.com/v1.0"

export function init(accessToken:string){

const graphCoreClient = Client.init({
    authProvider: (done) => {
		done("init error", accessToken);
	},
    debugLogging: true
})

return graphCoreClient
}