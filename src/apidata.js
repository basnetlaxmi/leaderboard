const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zkfjdkfhuefhfhf/scores/';

async function postData(data) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function getData() {
  const response = await fetch(url);
  return response.json();
}
export { postData, getData };