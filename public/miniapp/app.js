const tg = window.Telegram?.WebApp;
if (tg) tg.expand();

fetch("https://vape-catalog-n5ed.vercel.app/data.json")
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


