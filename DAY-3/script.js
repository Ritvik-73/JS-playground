input=document.getElementById("InputTxt")
butn=document.getElementById("butn")
output=document.getElementById("outputTxt")
clickCounter=document.getElementById("butnClicked")

let count=0;
butn.addEventListener("click",function(){
    const val = input.value;
    output.innerText = val;
    input.value = "";
    count++;
    clickCounter.innerText = `Button clicked: ${count} times`;
})

input.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        butn.click();
    }
})

input.addEventListener("input",function(){
    output.innerText = input.value;
})