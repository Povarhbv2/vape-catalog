const tg = window.Telegram?.WebApp;
if (tg) tg.expand();

// ВАЖНО: ../ потому что data.json лежит в public
fetch("../data.json?v=1")
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
        <button onclick='order(${JSON.stringify(p)})'>
          Заказать
        </button>
      `;

      catalog.appendChild(div);
    });
  })
  .catch(err => console.log("Ошибка:", err));

function order(product) {
  if (tg) {
    tg.sendData(JSON.stringify(product));
  } else {
    alert("Тестовый заказ");
  }
}
