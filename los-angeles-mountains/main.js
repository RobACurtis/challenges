
const $mountain1 = document.querySelector('#mountain-one');
const $mountain2 = document.querySelector('#mountain-two');
const $mountainImage1 = document.querySelector('#image-one');
const $mountainImage2 = document.querySelector('#image-two');

$mountain1.addEventListener('click', () => {
  $mountain1.className = 'mountain-tab-active';
  $mountain2.className = 'mountain-tab';
  $mountainImage1.className = '';
  $mountainImage2.className = 'hidden';
});

$mountain2.addEventListener('click', () => {
  $mountain1.className = 'mountain-tab';
  $mountain2.className = 'mountain-tab-active';
  $mountainImage1.className = 'hidden';
  $mountainImage2.className = '';
})
