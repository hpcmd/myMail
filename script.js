var nbMessage = document.getElementsByTagName('p').length;
console.log(nbMessage);
document.getElementById('message').textContent = `Messages Total : ${nbMessage}`;

for(var i=0; i<document.getElementsByClassName('trash').length; i++) {
    document.getElementsByClassName('trash')[i].addEventListener("click", 
    function(){ 
                this.parentNode.remove();
                nbMessage = document.getElementsByTagName('p').length;
                //console.log(nbMessage);
                document.getElementById('message').textContent = `Messages Total : ${nbMessage}`;

             })
                                                                    }

document.getElementById('btn-add').addEventListener("click",function(){
    var messageInput = document.getElementById('type-message').value;
    
    //creating <div> one by one
    var divCreate = document.createElement("div");
    divCreate.className ="row";
    document.body.appendChild(divCreate);

    var imageAvatar = document.createElement("img");
    imageAvatar.className = "avatar";
    imageAvatar.src="https://ariane.lacapsule.academy/images/avatar/5f71bab92f3599001a1886ae.jpg";
    divCreate.appendChild(imageAvatar);

    var nameAndMessage = document.createElement("div");
    divCreate.appendChild(nameAndMessage);

    var titleMessage = document.createElement("h6");
    titleMessage.textContent = "Hugo PAUL";
    nameAndMessage.appendChild(titleMessage);   

    var contentMessage = document.createElement("p");
    contentMessage.textContent = messageInput;
    nameAndMessage.appendChild(contentMessage);

    var trashCreate = document.createElement("img");
    trashCreate.className="trash";
    trashCreate.src="trash.png";
    divCreate.appendChild(trashCreate);
    trashCreate.addEventListener("click", function(){ 
                trashCreate.parentNode.remove(); 
                nbMessage = document.getElementsByTagName('p').length;
                document.getElementById('message').textContent = `Messages Total : ${nbMessage}`;}
                )

    nbMessage = document.getElementsByTagName('p').length;
    document.getElementById('message').textContent = `Messages Total : ${nbMessage}`;
    

    
})


