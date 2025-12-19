let messages = [];
let count = 0;

input=document.getElementById("InputTxt")
butn=document.getElementById("butn")
list=document.getElementById("list")
clickCounter=document.getElementById("butnClicked")

input.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        event.preventDefault();
        butn.click();
    }
})

butn.addEventListener("click",function(){
    inputValue = input.value.trim();

    if(inputValue === "")return;

    messages.push(inputValue);
    input.value = "";
    count++;
    clickCounter.innerText = `Button clicked: ${count} times`;

    printMessages();
})

function printMessages(){
    list.innerHTML = "";
    for(let i=0;i<=messages.length -1;i++){
        const li = document.createElement("li");
        li.innerText = messages[i];
        list.appendChild(li);
    }
}