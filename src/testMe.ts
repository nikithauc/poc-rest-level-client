import { testClient } from "./createTestClient";

async function testMe() {
    const res = await testClient.api("/me").get();
    console.log(res);
}

testMe().then(() => "done").catch();

// async function testSearchQuery() {
//     const res = await testClient.api("/me/drive/root/search(q = {'finance'})").get();
//     console.log(res);
// }

// testSearchQuery().then(() => "done").catch();