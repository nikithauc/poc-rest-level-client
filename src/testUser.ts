import { testClient } from "./createTestClient";
import { ODataCountResponse } from "./models";

async function testUserCount() {
    const res: ODataCountResponse = await testClient.api("/users/$count").get();
   // Test valid request
}

testUserCount().then(() => "done").catch();