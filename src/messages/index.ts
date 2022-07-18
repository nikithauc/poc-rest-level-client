
import { Routes } from "../GraphRoutes";

declare module "../GraphRoutes" {
    export interface Routes {
        (api: "/users/{user-id}/messages"): string,
        (api: "/users/{user-id}/messages/{message-id}"): string,
        (api: "/users/{user-id}/messages/{message-id}/$value"): string,
        (api: "/users/{user-id}/messages/{message-id}/attachments"): string,
        (api: "/users/{user-id}/messages/{message-id}/attachments/{attachment-id}"): string,
        (api: "/users/{user-id}/messages/{message-id}/attachments/$count"): string,
        (api: "/users/{user-id}/messages/{message-id}/attachments/microsoft.graph.createUploadSession"): string,
        (api: "/users/{user-id}/messages/{message-id}/extensions"): string,
        (api: "/users/{user-id}/messages/{message-id}/extensions/{extension-id}"): string,
        (api: "/users/{user-id}/messages/{message-id}/extensions/$count"): string,
        (api: "/users/{user-id}/messages/{message-id}/microsoft.graph.copy"): string,
        (api: "/users/{user-id}/messages/{message-id}/microsoft.graph.createForward"): string,
        (api: "/users/{user-id}/messages/{message-id}/microsoft.graph.createReply"): string,
        (api: "/users/{user-id}/messages/{message-id}/microsoft.graph.createReplyAll"): string,
        (api: "/users/{user-id}/messages/{message-id}/microsoft.graph.forward"): string,
        (api: "/users/{user-id}/messages/{message-id}/microsoft.graph.move"): string,
        (api: "/users/{user-id}/messages/{message-id}/microsoft.graph.reply"): string,
        (api: "/users/{user-id}/messages/{message-id}/microsoft.graph.replyAll"): string,
        (api: "/users/{user-id}/messages/{message-id}/microsoft.graph.send"): string,
        (api: "/users/{user-id}/messages/{message-id}/multiValueExtendedProperties"): string,
        (api: "/users/{user-id}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}"): string,
        (api: "/users/{user-id}/messages/{message-id}/multiValueExtendedProperties/$count"): string,
        (api: "/users/{user-id}/messages/{message-id}/singleValueExtendedProperties"): string,
        (api: "/users/{user-id}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}"): string,
        (api: "/users/{user-id}/messages/{message-id}/singleValueExtendedProperties/$count"): string,
    }
}