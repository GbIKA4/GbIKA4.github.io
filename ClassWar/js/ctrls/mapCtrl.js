angular.module('app').controller('mapCtrl', function (mapFactory, unitFactory, resFactory, playerFactory) {
  this.map = mapFactory.getMap();
  // this.unit = mapFactory.getUnit();
  // this.res = mapFactory.getRes();
  // this.player = mapFactory.getPlayer();
  this.cellClick = function (cell) {
    this.clickedCell = cell;
    mapFactory.cellClick(cell);
    this.eventStr = mapFactory.getEventStr();
    console.log(this.eventStr);
  	this.selection = unitFactory.getSelection();
  }
})
