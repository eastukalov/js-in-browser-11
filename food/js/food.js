'use strict';

function getRecipe(data) {
  document.querySelector('[data-title]').textContent = data.title;
  document.querySelector('[data-ingredients]').textContent = data.ingredients.join(', ');
  document.querySelector('[data-pic]').style.backgroundImage = `url(${data.pic})`;

  script = document.createElement('script');
  script.src = 'https://neto-api.herokuapp.com/food/42/rating?callback=getRating';
  document.body.appendChild(script);
}

let script = document.createElement('script');
script.src = 'https://neto-api.herokuapp.com/food/42?callback=getRecipe';
document.body.appendChild(script);

script = document.createElement('script');
script.src = 'https://neto-api.herokuapp.com/food/42/consumers?callback=getConsumers';
document.body.appendChild(script);

function getRating (data) {
  const rating = Math.round(data.rating * 100) / 100;
  document.querySelector('[data-rating]').textContent = rating;
  document.querySelector('[data-star]').style.width = `${rating * 10}%`;
  document.querySelector('[data-votes]').textContent = `(${data.votes} оценок)`;
}

function getConsumers(data) {
  console.log('');
  let node;

  for (const el of data.consumers) {
    node = document.createElement('img');
    node.src = el.pic;
    node.title = el.name;
    document.querySelector('[data-consumers]').appendChild(node);
  }

  if (data.total > 4) {
    node = document.createElement('span');
    node.textContent = `(+${data.total - 4})`;
    document.querySelector('[data-consumers]').appendChild(node);
  }

}
