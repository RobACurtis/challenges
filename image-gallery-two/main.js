const $div = document.querySelector('#gallery');
const $nav = document.querySelector('nav');
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

function newImage() {
  for (var i =0; i < arr.length; i++) {
    const img = new Image();
    img.src = 'https://source.unsplash.com' + arr[i];
    img.addEventListener('click', showImage);
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
  document.querySelector('#gallery-container').className = 'container mt-5 pt-5';
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
  $nav.className = 'navbar navbar-dark bg-dark navbar-expand-md fixed-top'
}

const $logo = document.querySelector('.logo');
$logo.addEventListener('click', showHomePage);

function showHomePage(e) {
  document.querySelector('#home-page').className = '';
  const $profilePage = document.querySelector('#profile-page');
  $profilePage.className = 'profile-page hidden';
  document.querySelector('#gallery-container').className = 'container mt-5 pt-5 hidden';
  document.querySelector('#gallery').innerHTML = '';
  $nav.className = 'navbar navbar-dark bg-dark navbar-expand-md fixed-top opacity-75'
}

const $searchForm = document.querySelector('form');
$searchForm.addEventListener('submit', (e) => {
  event.preventDefault();
    const $profilePage = document.querySelector('#profile-page');
    $profilePage.className = 'profile-page';
    document.querySelector('#home-page').className = 'hidden';
  $nav.className = 'navbar navbar-dark bg-dark navbar-expand-md fixed-top'
  $searchForm.reset();
    newImage();
});

function showImage(e) {
  const div = document.querySelector('#img-modal');
  const $div = document.querySelector('#img-modal-unhide');
  $div.className = '';
  console.log(div);
  const img = new Image();
  img.setAttribute('src', e.target.src);
  img.className = 'image-view';
  console.log(img);
  div.appendChild(img);
}
