
const refs = {
  inputVal:document.querySelector('#validation-input'),
}

let totalLength = Number(refs.inputVal.getAttribute('data-length'));
 
refs.inputVal.addEventListener('blur', inputOnBlur);


function inputOnBlur(event) {
  const intTotalLength = event.currentTarget.value;
  if (intTotalLength.length !== totalLength)
  { refs.inputVal.classList.add('invalid') }
if (intTotalLength.length === totalLength) {
	refs.inputVal.classList.add('valid')
	refs.inputVal.classList.remove('invalid')
  }
  if (intTotalLength.length === 0) {
    refs.inputVal.classList.remove("valid");
    refs.inputVal.classList.remove("invalid");
  }
}
 
