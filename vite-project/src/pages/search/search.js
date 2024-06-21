import './search.scss';
import axios from 'axios';
export const $ = (el, parent = document) => parent.querySelector (el);
export const gets = (el, parent = document) => [
  ...parent.querySelectorAll (el),
];
let data=[]
let key = '';
$ ('input').addEventListener ('change', e => {
  key = $ ('input').value.trim ();
//   console.log (1);
  getData ();
});

async function getData (url = 'https://zyxcl.xyz/exam_api/zh') {
  const res = await axios.get (url);
   data = res.data.items;
  data = data.filter (item => {
    return item.title.includes (key);
  });

  renderData ();
}
// async function getData1 (url ='https://zyxcl.xyz/exam_api/sx') {
//   const res = await axios.get (url);
//   data2 = res.data.items;
//   data2=data2.filter(item=>{
//     return item.title.includes(key)
//   })
//   totalData=totalData.concat(totalData,data2)
// }
// async function getData2 (url ='https://zyxcl.xyz/exam_api/xl') {
//   const res = await axios.get (url);
//   data3 = res.data.items;
//   data3=data3.filter(item=>{
//     return item.title.includes(key)
//   })
//   totalData=totalData.concat(totalData,data3)
// }

function renderData () {
  // getData1()
  // getData2()
  $ ('.list').innerHTML = data
    .map (item => {
      return `<li class="li">
        <div class="img">
            <img src="${item.img}" alt="">
        </div>
        <div class="content">
            <span class="title">${item.title}</span>
            <div class="shop">
                <span class="sold">月销:${item.sold}</span>
                <span class="price">￥${item.price}</span>
            </div>
        </div>
    </li>
      `;
    }).join ('');
}
