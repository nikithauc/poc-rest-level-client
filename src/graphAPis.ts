import { GetMe, GetMessages, SendMail, GetDrive, GroupOperations, GetUserCount } from "./apiOperations";
import { GraphClient } from "./graphClientInit";


export interface APIs {
    (api: "/me"): GetMe,
    (api: "/me/messages"): GetMessages,
    (api: "/me/sendMail"): SendMail,
    (api: "/me/drive"): GetDrive,
    /* NEW*/

    // GET /me/insights/trending
    (api: "/me/insights/trending"): GetDrive,
    // GET /me/manager
    (api: " /me/manager"): GetDrive,
     // GET /me/users/$count (with headers ConsistencyLevel = eventual)
     (api: "/users/$count"): GetUserCount,

    // GET /me/joinedTeams
    (api: "/me/joinedTeams"): GetDrive,
    
    // POST /groups (create a new group)
    (api: "/groups"): GroupOperations,

  
    // DELETE /groups/{group-id}
    (api: "/groups/{groupId}", groupId:string): GroupOperations,
 
    // PATCH /groups/{group-id}
    (api:`/groups/${string}`): GroupOperations,

    // POST /me/findMeetingTimes
    (api: "/me/findMeetingTimes")

    //POST / search / query
    (api: "/me/joinedTeams"): GetDrive,

    //GET / me / users / $count(with headers ConsistencyLevel = eventual)
    (api: `/me/drive/root/search(q = {'${string}'})`)
}






