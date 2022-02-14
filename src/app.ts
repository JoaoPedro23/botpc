// Supports ES6
 import { create, Whatsapp } from 'venom-bot';


  create("BOT VENOM")

  .then((client) => start(client))

  .catch((erro) => {
       
    console.log(erro);
  });

function start(client:Whatsapp) {

  client.onMessage((message) => {
    if (message.body.toLowerCase() === 'oi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'ola eu sou a Stefany sou uma atendente virtual  ')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });
}
