import { testClient } from "./createTestClient";
import { MicrosoftGraphDrive, MicrosoftGraphMessageCollectionResponse } from "./models";

async function testMessages() {
    const res:MicrosoftGraphMessageCollectionResponse  = await testClient.api("/me/messages").get();
    console.log(res.value[0]);
    console.log(res.value[0].subject);
}

testMessages().then(() => "done").catch();




async function testDrive() {
    const res: MicrosoftGraphDrive = await testClient.api("/me/drive").get();
    console.log(res);
    console.log(res.quota);
}

testDrive().then(() => "done").catch();

// async function sendMail() {

//     const body:MicrosoftGrap ={
//         message:{
//             subject: "9/9/2018: concert",
//     body: {
//       "contentType": "HTML",
//       "content": "The group represents Nevada."
//     },
//     toRecipients: [
//       {
//         "emailAddress": {
//           "address": "AlexW@contoso.OnMicrosoft.com"
//         }
//       }
//     ]
//         }
//     } 
//     const res = await testClient.api("/me/microsoft.graph.sendMail").post(body, {"Content-type":"application/json"});
//     console.log(res);
   
// }

// sendMail().then(() => "done").catch();
