import { display } from './data.js';

const gameId = 'Zl4d7IVkem';
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const scoreUrl = `${url}games/${gameId}/scores`;

// async function postData() {
//   const response = await fetch('scoreUrl');
//   const data = await response.json();
//   return data;
// }
// const a = postData();
// a.then((data) => display(data));
// console.log (data);
let data;
// const asForm = document.forms['add-form'];
const name = document.getElementById('name');
const score = document.getElementById('score');
const formdata = document.getElementById('sub');
formdata.addEventListener('click', () => {
  e.preventDefault();
  const user = name.value;
  const score1 = Number(score.value);
  if (user && score1) {
    data = { user, score1 };
    // eslint-disable-next-line no-use-before-define
    postData(data);
  }
});

async function postData(d) {
  const response = await fetch('scoreUrl', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json;
}

async function getData() {
  const response = await fetch(scoreUrl);
  return response.json();
}

export { postData, getData };