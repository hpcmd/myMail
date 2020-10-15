var nbMessage = document.getElementsByTagName('p').length;
console.log(nbMessage);
document.getElementById('message').textContent = `Messages Total : ${nbMessage}`;

for(var i=0; i<document.getElementsByClassName('trash').length; i++) {
document.getElementsByClassName('trash')[i].addEventListener("click", 
function(){ 
this.parentNode.remove();

nbMessage = document.getElementsByTagName('p').length;
console.log(nbMessage);
document.getElementById('message').textContent = `Messages Total : ${nbMessage}`;

})
}

