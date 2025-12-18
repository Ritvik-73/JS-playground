txt = document.getElementById("text");

changeTxt = document.getElementById("changetxtbtn");
changeBgc = document.getElementById("changecolorbtn");
toggle = document.getElementById("togglebtn");

changeTxt.addEventListener("click", function() {
    txt.innerText = "Text has been changed!";
});

changeBgc.addEventListener("click", function() {
    if (txt.style.color === "green") {
        txt.style.color = "white";
    } else {
        txt.style.color = "green";
    }
});

toggle.addEventListener("click", function() {
    if (txt.style.display === "none") {
        txt.style.display = "block";
    } else {
        txt.style.display = "none";
    }
});