const $div = document.querySelector('.column');
const $divL = document.querySelector('.column-full');
const arr = ['/900x1600/?surfing',
  '/1600x900/?surfing', '/1600x900/?sports',
             '/900x1600/?exercise', '/1600x900/?happy',
             '/900x1600/?love', '/1600x900/?joy', '/900x1600/?weather',
             '/900x1600/?mountains', '/1600x900/?skateboard', '/900x1600/?kids',
             '/1600x900/?snow', '/1600x900/?work',
              '/900x1600/?happy', '/1600x900/?grass', '/900x1600/?rain',
              '/900x1600/?boat', '/1600x900/?landscape', '/900x1600/?donuts',
              '/1600x900/?lake', '/1600x900/?office',
              '/900x1600/?clothes', '/900x1600/?running',
               '/900x1600/?walking', '/900x1600/?california', '/900x1600/?florida'
];
const landscape = [];
const portrait = [];
const images = [];


function newImage() {
  for (var i =0; i < arr.length; i++) {
    const img = new Image();
    img.src = 'https://source.unsplash.com' + arr[i];
img.onload = function () {
      if (this.width > this.height) {
        img.className = 'landscape';
        $div.appendChild(img);
      } else {
        img.className = 'portrait';
        $div.appendChild(img)
      }
    }
  }
}

newImage();


window.addEventListener('load', orderImages);
