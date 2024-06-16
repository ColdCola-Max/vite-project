import"./modulepreload-polyfill-B5Qt9EMX.js";import{a as l}from"./axios-B4uVmeYG.js";const a=(s,i=document)=>i.querySelector(s);let t=[],e="";a("input").addEventListener("change",s=>{e=a("input").value.trim(),c()});async function c(s="https://zyxcl.xyz/exam_api/zh"){t=(await l.get(s)).data.items,t=t.filter(n=>n.title.includes(e)),r()}function r(){a(".list").innerHTML=t.map(s=>`<li class="li">
        <div class="img">
            <img src="${s.img}" alt="">
        </div>
        <div class="content">
            <span class="title">${s.title}</span>
            <div class="shop">
                <span class="sold">月销:${s.sold}</span>
                <span class="price">￥${s.price}</span>
            </div>
        </div>
    </li>
      `).join("")}
