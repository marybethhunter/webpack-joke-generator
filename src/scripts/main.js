import 'bootstrap';
import '../styles/main.scss';
import domBuilder from './components/domBuilder';
import getAJokeButton from './components/getAJokeButton';
import domEvents from './events/domEvents';

const init = () => {
  domBuilder();
  domEvents();
  getAJokeButton();
};

init();
