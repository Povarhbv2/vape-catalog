const tg = window.Telegram?.WebApp;
if(tg) tg.expand();

fetch("https://vape-catalog-n5ed.vercel.app/data.json")
.then(r=>r.json())
.then(data=>{
  const catalog=document.getElementById("catalog");
  catalog.innerHTML="";

  data.products.forEach(p=>{
    const div=document.createElement("div");
    div.className="card";

    div.innerHTML=`
      <h3>${p.name}</h3>
      <div class="price">${p.price}</div>
      <div class="stock">В наличии: ${p.stock}</div>
      <button onclick='order(${JSON.stringify(p)})'>Заказать</button>
    `;

    catalog.appendChild(div);
  });
});

function order(p){
  if(tg){
    tg.sendData(JSON.stringify(p));
  }else{
    alert("Заказ отправлен");
  }
}



