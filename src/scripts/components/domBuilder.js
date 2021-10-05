const domBuilder = () => {
  const domString = `
    <div id="mainContainer">
      <header id="image"><img src="https://i.ibb.co/xzXbyr3/jokegenjs-2.png" alt="logo"></header>
      <div id="jokeContainer"></div>
      <div id="buttonContainer"></div>
    <div>`;
  document.querySelector('#app').innerHTML = domString;
};

export default domBuilder;
