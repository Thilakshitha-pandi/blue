//Local scoap
// same as function or block scope depending on context

function text(){
    console.log("message");
}
text();
function send(callback){
    console.log("message send");
    setInterval(callback,2000);
    //callback();
}
send(text);
