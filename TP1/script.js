const buttons=document.querySelectorAll("button");
const notif_message=document.querySelector(".notif-message");




buttons.forEach(button => {
    button.addEventListener('click',()=>{
        switch (button.innerText) {
            case "Notification Success":
                newP("Its a success!",'p-success');
                break;
            case "Notification Danger":
                newP("Attention,DANGER!!",'p-danger');
                break;
        
            case "Notification Warning":
                newP("WARNING!!",'p-warning');
                break;
            case "Notification Info":
                newP("Alert info!!",'p-info');
                break;
        }
    })
});








function newP(message,classP) {
    const notif_msg_contain=document.createElement('div');
    const message_contain=document.createElement('div');
    message_contain.className=classP;
    const p=document.createElement('p');
    p.innerText=message;
    message_contain.appendChild(p);
    notif_msg_contain.appendChild(message_contain);
    notif_message.appendChild(notif_msg_contain);
    setTimeout(()=>{ notif_msg_contain.innerHTML="";},1000);
    return p;
}



