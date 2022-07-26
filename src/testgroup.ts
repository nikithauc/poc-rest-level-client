// import { Group } from "./models";
// import { testClient } from "./createTestClient";

// // async function createGroup() {

// //     const body:Group ={
// //         displayName: "Test Group",
// //         description: "Test Group Description",
// //         mailEnabled: true,
// //         securityEnabled: false,
// //         groupTypes: ["Unified"],
// //         mailNickname: "TestGroup"
// //     }
// // const res:Group = await testClient.api("/groups").post(body);
// // console.log(res);
// // console.log(res.parentSiteId);
// // console.log(res.displayName);

// // }

// // createGroup().then(() => "created group").catch();

// // async function deleteGroup() {

// // const res = await testClient.api("/groups/9fc7474a-81eb-485d-b8ba-f8ac8a1135c4").delete();
// // console.log(res);

// // /// We should return a 204 status code since the body is empty.

// // }



// // deleteGroup();

// // async function patchGroup() {
// //     const body:Group ={
// //         displayName: "update Group",
// //         description: "update Group Description",
// //         mailEnabled: true,
// //     }
// //     const res = await testClient.api("/groups/{groupId}","004d6122-1d42-48bb-95b9-e33c05ba6694").post(body);
// //     console.log(res);
    
// //     /// We should return a 204 status code since the body is empty.
    
// // }

// // patchGroup().then(() => "created group").catch();