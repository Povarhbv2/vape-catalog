fetch("/data.json")
  .then(res => res.json())
  .then(data => {
    const catalog = document.getElementById("catalog");

    data.products.forEach(p => {
      const div = document.createElement("div");

      div.innerHTML = `
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <p>В наличии: ${p.stock}</p>
      `;

      catalog.appendChild(div);
    });
  });


