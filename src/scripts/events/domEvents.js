import getJoke from '../helpers/jokeData';
import showJoke from '../components/showJoke';
import showJokePunchline from '../components/showJokePunchline';

const domEvents = () => {
  document.querySelector('#mainContainer').addEventListener('click', (e) => {
    if (e.target.id.includes('getAJoke')) {
      getJoke().then((jokeObject) => showJoke(jokeObject));
    }
    if (e.target.id.includes('getPunchline')) {
      getJoke().then((jokeObject) => showJokePunchline(jokeObject));
    }
  });
};

export default domEvents;
