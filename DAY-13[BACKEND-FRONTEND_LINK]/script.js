const btn = document.getElementById("load");
const container = document.getElementById("shoes-container");

btn.addEventListener("click", async () => {
  container.innerHTML = "Loading...";

  try {
    const res = await fetch("http://127.0.0.1:8000/shoes");
    const shoes = await res.json();

    container.innerHTML = "";

    if (shoes.length === 0) {
      container.innerHTML = "<p>No shoes available</p>";
      return;
    }

    shoes.forEach((shoe) => {
      const div = document.createElement("div");
      div.className = "shoe-card";
      div.innerHTML = `
        <h3>${shoe.name}</h3>
        <p>ID: ${shoe.id}</p>
      `;
      container.appendChild(div);
    });

  } catch (err) {
    container.innerHTML = "<p>Failed to load shoes</p>";
  }
});
