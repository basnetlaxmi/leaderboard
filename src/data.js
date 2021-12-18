import { getData, postData } from './apidata.js';

let data = [
  { user: 'Laxmi', score: 45 },
  { user: 'Shyam', score: 30 },
  { user: 'Alisha', score: 50 },
  { user: 'Partner', score: 25 },
];

const index = (i) => `${data[i].user}-${data[i].score}`;

function display(data) {
  const table = document.querySelector('.scores-box');
  table.innerHTML = '';
  const codeData = data.map((el, i) => `<li id= "${index(i)}" class= "table-data">
  <span class="name">${el.user}</span>
  <span class="score">${el.score}</span>
  </li>`).join('');
  table.innerHTML = codeData;
}

const displayScores = async () => {
  const scores = await getData();
  if (scores.result) {
    data = scores.result;
  }
  display(data);
};
(async () => {
  await displayScores();
})();
const asForm = document.forms['add-score'];
const fetchRefreshBtn = document.querySelector('.refreshBtn');

asForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = asForm.name.value;
  const score = Number(asForm.score.value);
  if (user && score) {
    const obj = { user, score };
    await postData(obj);
    await displayScores();
    asForm.name.value = '';
    asForm.score.value = '';
  }
});

fetchRefreshBtn.addEventListener('click', async () => {
  await displayScores();
});
