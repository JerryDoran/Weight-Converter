document.getElementById('output').style.visibility = 'hidden';

const input = document.getElementById('lbsInput');

input.addEventListener('input', function(e) {
  let lbs = e.target.value;
  document.getElementById('output').style.visibility = 'visible';
  document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
  document.getElementById('kgOutput').innerHTML = lbs/2.2046;
  document.getElementById('ozOutput').innerHTML = lbs*16;
  // console.log(pounds);
});
