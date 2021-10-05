const showJokePunchline = (obj = {}) => {
  document.querySelector('#jokeContainer').innerHTML += `
    <p>${obj.delivery}</p>
  `;
  document.querySelector('#buttonContainer').innerHTML = `
  <button type="button" class="btn" id="getAJoke">Get Another Joke!</button>
  `;
};

export default showJokePunchline;
