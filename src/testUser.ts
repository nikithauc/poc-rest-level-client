import { testClient } from "./createTestClient";

async function testUserCount() {
    const res:number = await testClient.api("/users/$count").get({"ConsistencyLevel": "eventual"});
   // Test valid request
}

testUserCount().then(() => "done").catch();