const insertValue = document.getElementById('inputId');
// eslint-disable-next-line prefer-arrow-callback
insertValue.addEventListener('input', function (e) {
  const converison = e.target.value;
  const dollarVal = document.getElementById('dollarCur');
  dollarVal.innerHTML = converison * 453;
  const poundsVal = document.getElementById('poundsCur');
  poundsVal.innerHTML = converison * 559;
  const eurosVal = document.getElementById('eurosCur');
  eurosVal.innerHTML = converison * 489;
});