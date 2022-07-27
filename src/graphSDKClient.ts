import { GraphApis } from "./graph/apis";
import { GraphClient } from "./graphClientInit";

export type GraphSDKClient = GraphClient & {
    api: GraphApis
}