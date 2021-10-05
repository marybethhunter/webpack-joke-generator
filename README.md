
# Joke Generator [![Netlify Status](https://api.netlify.com/api/v1/badges/753e8f11-6a4d-4a53-b81f-186ce9adec45/deploy-status)](https://app.netlify.com/sites/mbh-joke-generator/deploys)

## [View Site](https://mbh-joke-generator.netlify.app/)
## Get Started:

```javascript
 $ git clone git@github.com:marybethhunter/webpack-joke-generator.git
 $ cd webpack-joke-generator
```

## About the User
* The user can visit Joke Generator to get a randomly generated web development joke.


## Features: 
* A random web development joke setup will be generated upon clicking the Get A Joke button.
* The joke delivery will appear underneath the setup upon clicking the Get Punchline button.
* Clicking the Get Another Joke button begins the process over again!

## Relevant Links:
* [Figma Wireframe](https://www.figma.com/file/dUTnw5fZfWCB2RCRJpS7Af/JJ-Wireframe-(JS)?node-id=0%3A1)

## Code Snippets:

```javascript
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
```

## Screenshots:

<img width="446" alt="main view" src="https://user-images.githubusercontent.com/86667443/136067709-55ad2751-de25-47d9-8a28-14dd73f6a70c.png">
<img width="444" alt="joke setup view" src="https://user-images.githubusercontent.com/86667443/136067714-5df29a4d-9c4a-42c5-8bcd-4c3730e033d9.png">
<img width="438" alt="joke setup and delivery" src="https://user-images.githubusercontent.com/86667443/136067723-1c2627cf-8c29-4138-80da-24a3d70c7bbe.png">

### Contributors: [Mary Beth Hunter](https://github.com/marybethhunter)
