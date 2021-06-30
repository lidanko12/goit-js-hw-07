

let inputVal = document.querySelector('#validation-input');

let totalLength = inputVal.getAttribute('data-length');
let intTotalLength = parseInt(totalLength, 10);

inputVal.oninput = function() {
  if (inputVal.value.length === intTotalLength) {
    inputVal.classList.remove('invalid');
    inputVal.classList.add('valid');
  }
  if (inputVal.value.length === 0) {
    inputVal.classList.remove('valid');
    inputVal.classList.remove('invalid');
  }
  if (inputVal.value.length !== intTotalLength && inputVal.value.length !== 0) {
    inputVal.classList.add('invalid');
  }
};