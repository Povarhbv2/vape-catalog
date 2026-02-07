const tg = window.Telegram?.WebApp;

fetch("/data")
  .then(res => res.json())
  .then(data => {
    const catalog = document.getElementById("catalog");

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
  });

function order(p) {
  if (tg) {
    tg.sendData(JSON.stringify(p));
  } else {
    alert("Заказ отправлен (тест)");
  }
}

