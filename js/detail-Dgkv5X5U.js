import"./modulepreload-polyfill-B5Qt9EMX.js";const a=(s,t=document)=>t.querySelector(s);let e=JSON.parse(localStorage.getItem("data"));console.log(e);a(".box").innerHTML=`<div class="img">
<img src="${e.img}" alt="">
</div>
<div class="content">
<div class="price" style="color: red;">￥${e.price}</div>
<div class="title">${e.title}</div>
<div class="detail" style="display: flex;justify-content: space-between;">
<span>快递：0元</span>
<span>月销量:${e.sold}</span>
<span>天津</span>
</div>
</div>`;
