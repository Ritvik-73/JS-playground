// EVEN/ODD CHECKER

input = document.getElementById("inputNum")
butn=document.getElementById("check")
result=document.getElementById("result")

butn.addEventListener("click",function(){
    num=Number(input.value);
    if(num%2==0){
        result.innerText="EVEN";
    }
    else{
        result.innerText="ODD";
    }
    input.value="";
})

input.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        butn.click();
    }
})


// CALCULATOR

a=document.getElementById("a")
b=document.getElementById("b")

plus=document.getElementById("plus")
minus=document.getElementById("minus")
multiply=document.getElementById("multiply")
divide=document.getElementById("divide")  
result2=document.getElementById("calcResult")

plus.addEventListener("click",function(){
    result2.innerText=Number(a.value)+Number(b.value);
})

minus.addEventListener("click", function(){
    result2.innerText=Number(a.value)-Number(b.value);
})

multiply.addEventListener("click", function(){
    result2.innerText=Number(a.value)*Number(b.value);
})

divide.addEventListener("click", function(){
    result2.innerText=Number(a.value)/Number(b.value);
})

a.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        b.focus();
    }
})

        
// NUMBER GUESSING GAME

result3=document.getElementById("guessResult");
butn2=document.getElementById("guessBtn");
let correct = Math.floor(Math.random()*10)+1;
let attempts=0

function game(){
    userGuess=Number(document.getElementById("guess").value);
    attempts++;

    if(userGuess==correct){
        result3.innerText=`Congratulations! You guessed the correct number ${correct} in ${attempts} attempts.`;
        correct = Math.floor(Math.random()*10)+1;
        attempts=0;
    }

    else if(userGuess<correct){
        result3.innerText=`too low! Try again.
        ${attempts} attempts made.`;
    }

    else if(userGuess>correct){
        result3.innerText=`too high! Try again.
        ${attempts} attempts made.`;
    }

    document.getElementById("guess").value="";
}

butn2.addEventListener("click",function(){
    game();
})  
document.getElementById("guess").addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        butn2.click();
    }
})