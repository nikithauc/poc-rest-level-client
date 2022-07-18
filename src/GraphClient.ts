import { init } from "./coreClient"
import { Routes } from "./GraphRoutes"
export type GraphSDKClient = GraphClient & {
    api: Routes
}
export interface GraphClient{
    api?:Function
}

export function GraphClientInit(accessToken){
    const client = (init(accessToken)) as unknown as GraphSDKClient;
    return client;
}