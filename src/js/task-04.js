const valueEl = document.querySelector('span#value');
const incrementEl = document.querySelector('[data-action=increment]');
const decrementEl = document.querySelector('[data-action=decrement]');

let counterValue = 0;

const decrement = () =>{ counterValue -= 1;
    return  valueEl.textContent = counterValue;
};
const increment = () =>{ counterValue += 1;
    return  valueEl.textContent = counterValue;
};

incrementEl.addEventListener('click',
    increment);
  
;
decrementEl.addEventListener('click',
    decrement);
   