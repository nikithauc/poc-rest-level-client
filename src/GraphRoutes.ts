import { User, MessageCollectionResponse, Drive, Message, SendMailBody } from "./Model";

export interface Routes {
    (api: "/me"): GetMe
    (api: "/me/messages"): GetMessages
    (api: "/me/sendMail"): SendMail
    (api: "/me/drive"): GetDrive
    (api: "/users/{user-id}", userid:string): GetMe
}

interface GetMe {
    get(): User,
}

interface GetDrive {
    get(): Drive,
}

interface GetMessages {
    get(): MessageCollectionResponse,
}

interface SendMail {
    post(body: SendMailBody, headers: Record<string, string>): number;

}





