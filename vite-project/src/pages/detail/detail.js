import './detail.scss';
import axios from 'axios';
export const $ = (el, parent = document) => parent.querySelector (el);
export const gets = (el, parent = document) => [
  ...parent.querySelectorAll (el),
];

let data = JSON.parse (localStorage.getItem ('data'));
console.log (data);
$ ('.box').innerHTML = `<div class="img">
<img src="${data.img}" alt="">
</div>
<div class="content">
<div class="price" style="color: red;">￥${data.price}</div>
<div class="title">${data.title}</div>
<div class="detail" style="display: flex;justify-content: space-between;">
<span>快递：0元</span>
<span>月销量:${data.sold}</span>
<span>天津</span>
</div>
</div>`;
