import './index.scss';
import axios from 'axios';
export const $ = (el, parent = document) => parent.querySelector (el);
export const gets = (el, parent = document) => [
  ...parent.querySelectorAll (el),
];
let data = [];
let data1=[]
let flag = 0;
let box = false;
getData ();

function renderData () {
//   console.log (data);
  if (!box) {
    $ ('.list').innerHTML = data
      .map ((obj,index) => {
        return `<li data-index=${index}>
    <div class="img">
      <img src="${obj.img}" alt="">
    </div>
    <div class="content">
     <span class="title">${obj.title}</span>
     <span class="sold">月销:${obj.sold}</span>
     <span class="price">￥${obj.price}</span>
    </div>
  </li>`;
      })
      .join ('');
      $ ('.list').style.cssText = `display:flex;flex-direction:column`;
  } else {
    $ ('.list').innerHTML = data
      .map ((obj,index) => {
        return `
        <li class="li" data-index=${index}>
        <div class="img">
          <img src="${obj.img}" alt="">
        </div>
        <div class="content">
          <span class="title">${obj.title}</span>
          <div class="shop">
            <span class="sold">月销：${obj.sold}</span>
            <span class="price">￥${obj.price}</span>
          </div>
        </div>
      </li>`;
      })
      .join ('');
    $ ('.list').style.cssText = `display:flex;flex-wrap:wrap`;
  }
}


async function getData (url = 'https://zyxcl.xyz/exam_api/zh') {
  const res = await axios.get (url);
  data = res.data.items;
 
    renderData ();
  
}


function bindEvent () {
  $ ('.sort').addEventListener ('click', e => {
    if (e.target.nodeName === 'SPAN') {
      $ ('.active') && $ ('.active').classList.remove ('active');
      e.target.classList.toggle ('active');
      const key = e.target.innerHTML;
      if (key === '销量') {
        const url = 'https://zyxcl.xyz/exam_api/xl';
        getData (url);
        data1=data
        console.log(data1)
      } else if (key === '上新') {
        const url = 'https://zyxcl.xyz/exam_api/sx';
        getData (url);
        data1=data
      } else if (key === '综合') {
        getData ();
        data1=data
      } 
      if (key === '价格') {flag = flag ==0 ? 1 : flag ==1?2:0;
        if (flag==0) {
        renderData ();
      } else if(flag==1) {
        data = data.sort ((a, b) => {
        return  b.price - a.price;
        });
        renderData ();
      }else{
        data = data.sort ((a, b) => {
        return a.price - b.price;
          });
        renderData ();
      }
      }
    }
  });
  $ ('.vision').addEventListener ('click', e => {
    box = box === false ? true : false;
    renderData ();
  });
  $('.list').addEventListener('click',e=>{
    if(e.target.nodeName==='LI'){
        // console.log()
        // location.href='http://localhost:5173/vite-project/detail.html'
        const index= e.target.getAttribute('data-index')
        // console.log(index)
        // console.log(data)
        const res=data[index]
        // console.log(res)
        localStorage.setItem('data',JSON.stringify(res))
        location.href='./detail.html'
        // location.href='./detail'
    }
  })
  $('.search').addEventListener('click',e=>{
    location.href='./search.html'
    // location.href='./search'
  })
}
bindEvent ();
