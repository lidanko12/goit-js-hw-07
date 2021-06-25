"use strict"
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',

];

const itemListEl = document.querySelector('#ingredients');
const element = ingredients.map(ingredient => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  return itemEl;

});
console.log(element);
itemListEl.append(...element);
  


