
// JavaScript

const open = document.querySelector('#btn-open');
const close = document.querySelector('#btn-close');
const menu = document.querySelector('#menu');
const items = document.querySelectorAll('.item');

const options = {
  duration: 600,
  easing: 'ease',
  fill: 'forwards',
}

const menuOpen = () => {
  const keyframes = {
    visibility: ['hidden','visible'],
    opacity: [0,1]
  }
  menu.animate(keyframes,options);

  items.forEach((item,index) => {
    item.animate({opacity:[0,1]},{
      duration: 600,
      easing: 'ease',
      fill: 'forwards',
      delay: index * 200,
    });
  });

}
open.addEventListener('click',menuOpen);

const menuClose = () => {
  const keyframes = {
    visibility: ['visible','hidden'],
    opacity: [1,0]
  }
  menu.animate(keyframes,options);

  items.forEach((item) => {
    item.animate({opacity:[1,0]},{
      duration: 600,
      easing: 'ease',
      fill: 'forwards',
    });
  });

}
close.addEventListener('click',menuClose);

const thumbs = document.querySelectorAll('.thumb');
const main = document.querySelector('#main-image');
const text = document.querySelector('#caption');

// クリックで切り替え
// thumbs.forEach(function(item, index) {
//   item.onclick = function() {
//     // console.log(this.dataset.image);
//     main.src = this.dataset.image;
//   }
// });

//マウスオーバー
thumbs.forEach(function(item, index) {
  item.onmouseover = function() {
    main.src = this.dataset.image;
    text.textContent = this.title;
  }
});

//イベントリスナーで書き換え
// thumbs.forEach(function (item, index) {
//   function change() {
//     main.src = this.dataset.image;
//   }
//   item.addEventListener('mouseover', change);
// });
