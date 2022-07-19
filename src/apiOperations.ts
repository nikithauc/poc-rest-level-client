import { User, MessageCollectionResponse, Drive, Message, SendMailBody, Group } from "./models";
export interface GetMe {
    get(header:Record<string,string>,q:{$select:string}): User,
}

export interface GetUserCount {
    get(header:Record<string,string>): number,
}

export interface GetDrive {
    get(): Drive,
}

export interface GetMessages {
    get(): MessageCollectionResponse,
}

export interface SendMail {
    post(body: SendMailBody, headers: Record<string, string>): number;

}

export interface GroupOperations { 
    get(): Group,
    delete():unknown
    post(body: Group, headers?: Record<string, string>): Group;
    patch(body:Group):unknown
}