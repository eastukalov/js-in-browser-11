'use strict';

function getData(data) {
  document.querySelector('[data-wallpaper]').src = data.wallpaper;
  document.querySelector('[data-username]').textContent = data.username;
  document.querySelector('[data-description]').textContent = data.description;
  document.querySelector('[data-pic]').src = data.pic;
  document.querySelector('[data-tweets]').value = data.tweets;
  document.querySelector('[data-followers]').value = data.followers;
  document.querySelector('[data-following]').value = data.following;
}

const script = document.createElement('script');
script.src = 'https://neto-api.herokuapp.com/twitter/jsonp?callback=getData';
document.body.appendChild(script);