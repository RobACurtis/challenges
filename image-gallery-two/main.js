const $div = document.querySelector('#gallery');
const arr = ['/900x1600/?surfing',
  '/1600x900/?surfing', '/1600x900/?sports',
  '/900x1600/?exercise', '/1000x1000/?weights','/1600x900/?happy',
             '/900x1600/?love', '/1600x900/?joy', '/900x1600/?weather',
             '/900x1600/?mountains', '/1600x900/?skateboard', '/900x1600/?kids',
  '/1600x900/?snow', '/1000x1000/?newyork','/1600x900/?work',
              '/900x1600/?happy', '/1600x900/?grass', '/900x1600/?rain',
              '/900x1600/?boat', '/1600x900/?landscape', '/900x1600/?donuts',
              '/1600x900/?lake', '/1600x900/?office',
              '/900x1600/?clothes', '/900x1600/?running',
               '/900x1600/?walking', '/900x1600/?california', '/900x1600/?florida',
                '/1000x1000/?island'
];
const landscape = [];
const portrait = [];
const images = [];

window.addEventListener('click', () => {
  if (event.target.id === 'show-form-button' || event.target.className === 'fas fa-search') {
    const $searchForm = document.querySelector('#search-form').className = "d-flex search-form";
    document.querySelector('#show-form-button').className = 'hidden';
 } else if (event.target.id !== 'search-input') {
    document.querySelector('#search-form').className = "d-flex search-form-hidden";
    document.querySelector('#show-form-button').className = 'btn';
  }
});

function newImage() {
  for (var i =0; i < arr.length; i++) {
    const img = new Image();
    img.src = 'https://source.unsplash.com' + arr[i];
     img.onload = function () {
      if (this.width > this.height) {
        img.className = 'landscape';
        $div.prepend(img);
      } else if (this.width < this.height) {
        img.className = 'portrait';
        $div.prepend(img)
      } else {
        img.className = 'square';
        $div.prepend(img);
      }
    }
  }
  for (let i = 0; i < 2; i++) {
    const $div2 = document.createElement('div');
    $div2.className = 'div';
    $div.appendChild($div2);
  }
}

const $homeImage = document.querySelector('.hero-image');

let i = 3;
const interval = setInterval(() => {
  if (i === 4) {
  for (let index = 0; index < 4; index++) {
    $homeImage.children[index].className = 'img-homepage'
  }
  i = 3;
  return;
}
    $homeImage.children[i].className = 'img-homepage opacity';
  i--;
  if (i === 0) {
    $homeImage.children[i].className = 'img-homepage';
    i = 4;
  } else {
  $homeImage.children[i].className = 'img-homepage';
  }
}, 4000);

const $exploreButton = document.querySelector('#button');

$exploreButton.addEventListener('click', showGallery);

function showGallery(e) {
  newImage();
  document.querySelector('#home-page').className = 'hidden';
  document.querySelector('#gallery-container').className = 'container mt-5 pt-5';
  document.querySelector('nav').className = 'navbar navbar-expand-lg bg-dark py-3 fixed-top';
}

const $logo = document.querySelector('.logo');
$logo.addEventListener('click', showHomePage);

function showHomePage(e) {
  document.querySelector('#home-page').className = '';
  document.querySelector('#gallery-container').className = 'container mt-5 pt-5 hidden';
  document.querySelector('#gallery').innerHTML = '';
  document.querySelector('nav').className = 'navbar navbar-expand-lg bg-dark py-3 fixed-top navbar-opacity';
}
