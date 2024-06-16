import"./modulepreload-polyfill-B5Qt9EMX.js";import{a as p}from"./axios-B4uVmeYG.js";const i=(t,e=document)=>e.querySelector(t);let s=[],n=[],l=0,d=!1;r();function c(){d?(i(".list").innerHTML=s.map((t,e)=>`
        <li class="li" data-index=${e}>
        <div class="img">
          <img src="${t.img}" alt="">
        </div>
        <div class="content">
          <span class="title">${t.title}</span>
          <div class="shop">
            <span class="sold">月销：${t.sold}</span>
            <span class="price">￥${t.price}</span>
          </div>
        </div>
      </li>`).join(""),i(".list").style.cssText="display:flex;flex-wrap:wrap"):(i(".list").innerHTML=s.map((t,e)=>`<li data-index=${e}>
    <div class="img">
      <img src="${t.img}" alt="">
    </div>
    <div class="content">
     <span class="title">${t.title}</span>
     <span class="sold">月销:${t.sold}</span>
     <span class="price">￥${t.price}</span>
    </div>
  </li>`).join(""),i(".list").style.cssText="display:flex;flex-direction:column")}async function r(t="https://zyxcl.xyz/exam_api/zh"){s=(await p.get(t)).data.items,c()}function m(){i(".sort").addEventListener("click",t=>{if(t.target.nodeName==="SPAN"){i(".active")&&i(".active").classList.remove("active"),t.target.classList.toggle("active");const e=t.target.innerHTML;e==="销量"?(r("https://zyxcl.xyz/exam_api/xl"),n=s,console.log(n)):e==="上新"?(r("https://zyxcl.xyz/exam_api/sx"),n=s):e==="综合"&&(r(),n=s),e==="价格"&&(l=l==0?1:l==1?2:0,l==0?c():l==1?(s=s.sort((a,o)=>o.price-a.price),c()):(s=s.sort((a,o)=>a.price-o.price),c()))}}),i(".vision").addEventListener("click",t=>{d=d===!1,c()}),i(".list").addEventListener("click",t=>{if(t.target.nodeName==="LI"){const e=t.target.getAttribute("data-index"),a=s[e];localStorage.setItem("data",JSON.stringify(a)),location.href="https://coldcola-max.github.io/vite-project/detail.html"}}),i(".search").addEventListener("click",t=>{location.href="https://coldcola-max.github.io/vite-project/search.html"})}m();
