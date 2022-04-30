
var $circle = document.querySelectorAll('i.circle');
var $divCircle = document.querySelector('div.circle');
$divCircle.addEventListener('click', dotSelect);

var $images = document.querySelectorAll('img');
var intervalID = setInterval(nextImage, 3000);
var index = 0;

function nextImage(event) {
  index++;
  $images[index - 1].className = 'fall-left';
  $images[index - 1].addEventListener('animationend', function () {
  if (index >= $images.length) {
    $images[index - 1].className = 'hidden';
    $circle[index - 1].className = 'circle far fa-circle';
    index = 0;
    $images[index].className = '';
    $circle[index].className = 'circle fas fa-circle';
  } else if (index < $images.length) {
    $images[index].className = '';
    $circle[index].className = 'circle fas fa-circle';
    if(index === 0) {
      $images[$images.length - 1].className = 'hidden';
      $circle[$circle.length - 1].className = 'circle far fa-circle';
    } else {
    $images[index - 1].className = 'hidden';
    $circle[index-1].className = 'circle far fa-circle';
    }
  }
  console.log(index);
})
  clearInterval(intervalID);
  intervalID = setInterval(nextImage, 5000);
}


function dotSelect(event) {
  for (var i = 0; i < $images.length; i++) {
    $images[i].className = 'hidden';
    $circle[i].className = 'circle far fa-circle';
  }
  var id = parseInt(event.target.id);
  $images[id].className = '';
  $circle[id].className = 'circle fas fa-circle circle-view';
  clearInterval(intervalID);
  index = id;
  intervalID = setInterval(nextImage, 3000);
}
