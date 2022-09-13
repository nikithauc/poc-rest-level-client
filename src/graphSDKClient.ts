import { Apis } from "./apis"
import { GraphClient } from "./graphClientInit"

export type GraphSDKClient = GraphClient & {
    api: Apis
}