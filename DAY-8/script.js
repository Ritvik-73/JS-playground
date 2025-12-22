loadButn = document.getElementById("loadBtn")
userInfo = document.getElementById("userInfo")


loadButn.addEventListener("click",async function loadUserInfo() {
    let i = Math.floor(Math.random()*10) + 1;
    userInfo.innerText=`Fetching User: ${i}`

    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${i}`);
    const user = await response.json();

    userInfo.innerText = `Name: ${user.name}
      Email: ${user.email}
      City: ${user.address.city}
    `;
    } catch(error) {
    userInfo.innerText = "Failed to load user.";
    }
})