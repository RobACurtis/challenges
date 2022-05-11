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
const portraitClone = [];
const landscapeClone = [];
const images = [];
const imagesClone = [];


function newImage() {
  for (var i =0; i < arr.length; i++) {
    const img = new Image();
    img.src = 'https://source.unsplash.com' + arr[i];
img.onload = function () {
      if (this.width > this.height) {
        img.className = 'grid-item grid-item--width2';
        landscape.push(img);
        landscapeClone.push(img.cloneNode(true))
      } else {
        img.className = 'grid-item grid-item--height2';
        portrait.push(img)
        portraitClone.push(img.cloneNode(true))
      }
    }
  }
}

newImage();


function orderImages () {
for (var i = 0; i < landscape.length; i++) {
    images.push(landscape[i]);
  }
  let order = 3;
  let index = 2;
  for (i = 0; i < portrait.length; i++) {
    if(i < order) {
    images.splice(index, 0, portrait[i]);
  } else {
      order += 3;
      index += 5;
      images.splice(index, 0, portrait[i]);
  }
}
  for (var i = 0; i < images.length; i++) {
    $div.appendChild(images[i])
    }
clonedDiv();
}

function clonedDiv() {
  for (var i = 0; i < landscapeClone.length; i++) {
    imagesClone.push(landscapeClone[i]);
  }
  let y = 0;
  for (i = 0; i < portraitClone.length; i++) {

    imagesClone.splice(y, 0, portraitClone[i]);
    if (i + 4 === portraitClone.length) {
      y = imagesClone.length - 2;
    } else if (i % 2 === 0) {
      y+=2;
    }  else {
      y+=1
    }
  }
  for (var i = 0; i < imagesClone.length; i++) {
    $divL.appendChild(imagesClone[i]);
  }
}

window.addEventListener('load', orderImages);
