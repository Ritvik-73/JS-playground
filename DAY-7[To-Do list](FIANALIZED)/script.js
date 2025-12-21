let messages = [];

loadMessages();
printMessages();

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

    messages.push({
        text:inputValue,
        completed:false
    });
    input.value = "";

    saveMessages();
    printMessages();
})

function printMessages(){
    list.innerHTML = "";
    for(let i=0;i<=messages.length -1;i++){
        const li = document.createElement("li");
        
        const span = document.createElement("span");
        span.innerText = messages[i].text;

        if(messages[i].completed){
            span.style.textDecoration = "line-through";
        }

        span.addEventListener("click",function(){
            messages[i].completed = !messages[i].completed;
            saveMessages();
            printMessages();
        })

        const deletebtn = document.createElement("button");
        deletebtn.innerText = "❌";
        deletebtn.addEventListener("click",function(){
            messages.splice(i,1);
            saveMessages();
            printMessages();
        })

        li.appendChild(span);
        li.appendChild(deletebtn);
        list.appendChild(li);
    }
}

function saveMessages(){
    localStorage.setItem("messages", JSON.stringify(messages));
}

function loadMessages(){
    storedMessages = localStorage.getItem("messages");

    if(storedMessages){
        messages = JSON.parse(storedMessages);
    }
}
