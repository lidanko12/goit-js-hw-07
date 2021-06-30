let controlFont = document.querySelector('#font-size-control');

let text = document.querySelector('#text');

controlFont.oninput = function() {
  text.style.fontSize = controlFont.value + 'px';
};
