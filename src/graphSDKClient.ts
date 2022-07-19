import { APIs } from "./graphAPis"
import { GraphClient } from "./graphClientInit"

export type GraphSDKClient = GraphClient & {
    api: APIs
}