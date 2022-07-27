import { GraphApis } from "./graphAPIs";
import { GraphClient } from "./graphClientInit";

export type GraphSDKClient = GraphClient & {
    api: GraphApis
}