import"./modulepreload-polyfill-B5Qt9EMX.js";import{a as p}from"./axios-B4uVmeYG.js";const i=(e,t=document)=>t.querySelector(e);let s=[],c=[],l=0,o=!1;r();function n(){o?(i(".list").innerHTML=s.map((e,t)=>`
        <li class="li" data-index=${t}>
        <div class="img">
          <img src="${e.img}" alt="">
        </div>
        <div class="content">
          <span class="title">${e.title}</span>
          <div class="shop">
            <span class="sold">月销：${e.sold}</span>
            <span class="price">￥${e.price}</span>
          </div>
        </div>
      </li>`).join(""),i(".list").style.cssText="display:flex;flex-wrap:wrap"):(i(".list").innerHTML=s.map((e,t)=>`<li data-index=${t}>
    <div class="img">
      <img src="${e.img}" alt="">
    </div>
    <div class="content">
     <span class="title">${e.title}</span>
     <span class="sold">月销:${e.sold}</span>
     <span class="price">￥${e.price}</span>
    </div>
  </li>`).join(""),i(".list").style.cssText="display:flex;flex-direction:column")}async function r(e="https://zyxcl.xyz/exam_api/zh"){s=(await p.get(e)).data.items,n()}function f(){i(".sort").addEventListener("click",e=>{if(e.target.nodeName==="SPAN"){i(".active")&&i(".active").classList.remove("active"),e.target.classList.toggle("active");const t=e.target.innerHTML;t==="销量"?(r("https://zyxcl.xyz/exam_api/xl"),c=s,console.log(c)):t==="上新"?(r("https://zyxcl.xyz/exam_api/sx"),c=s):t==="综合"&&(r(),c=s),t==="价格"&&(l=l==0?1:l==1?2:0,l==0?n():l==1?(s=s.sort((a,d)=>d.price-a.price),n()):(s=s.sort((a,d)=>a.price-d.price),n()))}}),i(".vision").addEventListener("click",e=>{o=o===!1,n()}),i(".list").addEventListener("click",e=>{if(e.target.nodeName==="LI"){const t=e.target.getAttribute("data-index"),a=s[t];localStorage.setItem("data",JSON.stringify(a)),location.href="./vite-project/detail"}}),i(".search").addEventListener("click",e=>{location.href="./vite-project/search"})}f();
