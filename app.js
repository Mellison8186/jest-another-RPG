const Game = require('./lib/Game');

new Game().initializeGame()
    .then(({ name }) => {
    this.player = new Player(name);
  
    this.startNewBattle();
  });