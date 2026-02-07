const tg = window.Telegram?.WebApp;
if(tg) tg.expand();

let DATA;

fetch("/data.json")
.then(r=>r.json())
.then(data=>{
  DATA=data;
  showCategories();
});

function showCategories(){
  const c=document.getElementById("catalog");
  c.className="grid";
  c.innerHTML="";

  DATA.categories.forEach(cat=>{
    const div=document.createElement("div");
    div.className="card";

    div.innerHTML=`
      <img src="${cat.image}">
      <h3>${cat.name}</h3>
    `;

    div.onclick=()=>showProducts(cat.id);
    c.appendChild(div);
  });
}

function showProducts(catId){
  const c=document.getElementById("catalog");
  c.className="grid";
  c.innerHTML=`<button class="back" onclick="showCategories()">⬅ Назад</button>`;

  DATA.products
  .filter(p=>p.category===catId)
  .forEach(p=>{
    const div=document.createElement("div");
    div.className="card product";

    div.innerHTML=`
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <div>${p.price}</div>
      <div>В наличии: ${p.stock}</div>
      <button onclick='order(${JSON.stringify(p)})'>Заказать</button>
    `;

    c.appendChild(div);
  });
}

function order(p){
  if(tg){
    tg.sendData(JSON.stringify(p));
  }else{
    alert("Заказ отправлен");
  }
}
