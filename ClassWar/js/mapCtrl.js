angular.module('app').controller('mapCtrl', function (mapFactory, unitFactory, resFactory, playerFactory) {
  this.map = mapFactory.getMap();
  // this.unit = mapFactory.getUnit();
  // this.res = mapFactory.getRes();
  // this.player = mapFactory.getPlayer();
  this.cellClick = function (cell) {
    this.clickedCell = cell;
    // console.log(this.clickedCell);
    mapFactory.cellClick(cell);
  	this.selection = unitFactory.getSelection();
    return this.selection;
  }
})
