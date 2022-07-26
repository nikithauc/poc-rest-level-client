import { Routes } from "./graph/apis";
import { GraphClient } from "./graphClientInit";

export type GraphSDKClient = GraphClient & {
    api: Routes
}