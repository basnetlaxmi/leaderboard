const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zkfjdkfhuefhfhf/scores/';

const postData = async (data) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};

const getData = async () => {
  const response = await fetch(url);
  return response.json();
};
export { postData, getData };