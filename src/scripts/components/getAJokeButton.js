const getAJokeButton = () => {
  document.querySelector('#buttonContainer').innerHTML = `
    <button type="button" class="btn" id="getAJoke">Get A Joke!</button>
  `;
};

export default getAJokeButton;
