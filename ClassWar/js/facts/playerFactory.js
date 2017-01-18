angular.module('app').factory('playerFactory', function () {
    var service = {};

  // CLASS PLAYER

  var Players = function (argument) {
  	var it = this;

    it.playerId = argument.playerId;
  	it.name = argument.name;
  	it.pop = argument.pop;
    it.color = argument.color;
    // relation -> ARR of players relation of Ally = true||Enemy = false
    it.relation = [];

    it.init = function () {
      for (var i = 0; i < player.length; i++) {
        it.relation[i] = false;
      }
    }

  	it.show = function () {
  		console.log("player name:", it.name);
  		console.log("population:", it.pop);
      for (var i = 0; i < it.relation.length; i++) {
        console.log('Player ', i,' Ally', it.relation[i]);
      }
      return it;
  	}

  }

  // PLAYERS

  var player = [];

  player[0] = new Players({
    playerId: 0,
    name: "specPlayer",
  	pop: "0",
    color: "player-01-color"
  });

  player[1] = new Players({
    playerId: 0,
  	name: "Player 1",
  	pop: "1",
    color: "player-02-color"
  });

  player[2] = new Players({
    playerId: 0,
  	name: "Player 2",
  	pop: "1",
    color: "player-03-color"
  });

  for (var i = 0; i < player.length; i++) {
    player[i].init();
  }

  service.getPlayer = function () {
      return player;
  }


  return service;
})
