import { URLOperation5885, URLOperation5886 } from "../../lib/graphOpsModels/operations";
import { GraphApis } from "../../lib/graphAPIs";

declare module "../../lib/graphAPIs" {

    export interface GraphApis {
        (api: "/users"): URLOperation5885,
        (api: "/users/{user-id}"): URLOperation5886,
    }

}