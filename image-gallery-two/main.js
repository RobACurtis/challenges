const $div = document.querySelector('.grid');
const arr = ['surfing', 'sports', 'exercise', 'happy', 'love', 'joy', 'weather', 'mountains', 'skateboard', 'kids', 'snow'];
function createImageGallery() {
  for (var i = 0; i < arr.length; i++) {
    const img = document.createElement('img');
    img.setAttribute('src','https://source.unsplash.com/1600x900/?' + arr[i]);
    img.className = 'grid-item';
    $div.appendChild(img);
  }
}

createImageGallery();
