import clearDom from '../helpers/clearDom';

const showJoke = (obj = {}) => {
  clearDom();
  document.querySelector('#jokeContainer').innerHTML = `
      <h1>${obj.setup}</h1>
    `;
  document.querySelector('#buttonContainer').innerHTML += `
  <button type="button" class="btn" id="getPunchline">Get Punchline!</button>
  `;
};

export default showJoke;
