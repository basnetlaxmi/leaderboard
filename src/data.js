import { getData, postData } from './apidata.js';

const data = [
  { name: 'Laxmi', score: 45 },
  { name: 'Shyam', score: 30 },
  { name: 'Alisha', score: 50 },
  { name: 'Partner', score: 25 },
];

const index = (i) => `${data[i].name}-${data[i].score}`;

function display(data) {
  const table = document.querySelector('.scores-box');
  table.innerHTML = '';
  const codeData = data.map((el, i) => `<li id= "${index(i)}" class= "table-data">
  <span class="name">${el.name}</span>
  <span class="score">${el.score}</span>
  </li>`).join('');
  table.innerHTML = codeData;
}

const fetchRefreshBtn = document.querySelector('.refresh-btn');
fetchRefreshBtn.addEventListener('click', getData);
export { data, display };