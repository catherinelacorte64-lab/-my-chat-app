function send(){

let input = document.getElementById("message");
let text = input.value.trim();

if(!text) return;

let chat = document.getElementById("chat");

chat.innerHTML += `
<div class="user">
<div class="msg">${text}</div>
</div>
`;

let replies = [
"Tell me more.",
"Interesting.",
"I understand.",
"Really?",
"Go on...",
"That's cute."
];

let reply = replies[Math.floor(Math.random()*replies.length)];

setTimeout(()=>{
chat.innerHTML += `
<div class="bot">
<div class="msg">${reply}</div>
</div>
`;
chat.scrollTop = chat.scrollHeight;
},500);

input.value="";
  }
