angular.module('app').controller('uiCtrl', function (uiFactory) {
  // console.log('uiCtrl is loaded');
  this.minMapWindow = uiFactory.getMinMap();

  // console.log(this.minMapWindow);

  this.cellClick = function (cellId) {
    uiFactory.cellClick(cellId);
  }
  this.saveGame = function () {
    uiFactory.saveGame();
  }
})
