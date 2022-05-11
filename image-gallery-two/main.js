const $div = document.querySelector('.column');
const arr = ['/900x1600/?surfing', '/1600x900/?surfing', '/1600x900/?sports', '/900x1600/?exercise', '/1600x900/?happy', '/900x1600/?love', '/1600x900/?joy', '/900x1600/?weather', '/900x1600/?mountains', '/1600x900/?skateboard', '/900x1600/?kids', '/1600x900/?snow'];

function newImage() {
  for (var i =0; i < arr.length; i++) {
    const img = new Image();
    img.src = 'https://source.unsplash.com' + arr[i];
img.onload = function () {
      if (this.width > this.height) {
        img.className = 'grid-item grid-item--width2';
        $div.appendChild(img);
      } else {
        img.className = 'grid-item grid-item--width2';
        $div.appendChild(img);
      }
    }
  }
}

newImage();
