import { init } from "./coreClient"
import { GraphSDKClient } from "./graphSDKClient"

export interface GraphClient{
    api?:Function
}


export function GraphClientInit(accessToken){
    const client = (init(accessToken)) as unknown as GraphSDKClient;
    return client;
}