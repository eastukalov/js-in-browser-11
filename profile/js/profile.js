'use strict';

function getUser(data) {
  document.querySelector('[data-name]').textContent = data.name;
  document.querySelector('[data-description]').textContent = data.description;
  document.querySelector('[data-pic]').src = data.pic;
  document.querySelector('[data-position]').textContent = data.position;
  const script = document.createElement('script');
  script.src = `https://neto-api.herokuapp.com/profile/${data.id}/technologies?callback=getTechnologies`;
  document.body.appendChild(script);
}

function getTechnologies(data) {
  let node;

  for(const el of data) {
    node = document.createElement('span');
    node.classList.add('devicons');
    node.classList.add('devicons-' + el);
    document.querySelector('[data-technologies]').appendChild(node);
  }

  document.querySelector('.content').style.display = 'initial';
}

let script = document.createElement('script');
script.src = 'https://neto-api.herokuapp.com/profile/me?callback=getUser';
document.body.appendChild(script);