import { testClient } from "./createTestClient";
import { ODataCountResponse } from "./models";

async function testUserCount() {
    //need headers
    const res: ODataCountResponse = await testClient.api("/users/$count").get();
   // Test valid request

   console.log(res);
}

testUserCount().then(() => "done").catch();