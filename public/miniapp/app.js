fetch("/data.json?v=2")
  .then(res => res.json())
  .then(data => {
    const catalog = document.getElementById("catalog");
    catalog.innerHTML = "";

    data.products.forEach(p => {
      const div = document.createElement("div");

      div.innerHTML = `
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <p>В наличии: ${p.stock}</p>
      `;

      catalog.appendChild(div);
    });
  })
  .catch(err => console.log("Ошибка:", err));
