var $body = document.querySelector('body');
var $p = document.querySelector('h2');
var $h1 = document.querySelector('h1');
$body.addEventListener('click', function() {
  $p.className = 'circle';
  $h1.className = 'hidden';
  setTimeout(function () { $p.className = 'hidden'; $h1.className = '' }, 5000)
});
