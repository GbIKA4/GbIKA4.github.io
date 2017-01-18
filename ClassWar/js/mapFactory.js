angular.module('app').factory('mapFactory', function (resFactory, unitFactory, playerFactory) {
  var service = {};

  // CLASS MAP -> MAP = ARR OF MAPCELL

  var MapCell = function (argument) {

  	var it = this;

    it.isFree = argument.isFree;

  	it.isResource = argument.isResource;

  	it.prisonedId = argument.prisonedId;

  	it.coords = argument.coords;

  	it.show = function () {
  		console.log("free: ", it.isFree);
  		console.log("resource: ", it.isResource);
  		console.log("prisonedId: ", it.prisonedId);
  		console.log("x: ", it.coords.x);
  		console.log("y: ", it.coords.y);
  		return it;
  	}

  	it.clear = function () {
  		it.isFree = true;
  		it.isResource = false;
  		it.prisonedId = null;
  	}

  }

  var MapClass = function () {
  	var it = this;
  	it.cells = [];
  	it.size = {
  		width: 0,
  		height: 0
  	}

    it.renderCells = [];

  	it.init = function (data) {
  		it.size = data.size;
  		for (var i = 0; i < it.size.width; i++) {
  			for (var j = 0; j < it.size.height; j++) {
  				it.cells[(i * it.size.width) + (j+0)] = new MapCell({
  					isFree : true,
  					isResource : false,
  					prisonedId : null,
  					coords:{
  						x : i,
  						y : j
  					}
  				});
  			}
  		}
  	}


    it.locate = function (x, y, width) { // turn pair coordinates (x,y) into 1 num, to use in Array
      return x * width + y;
    }

    it.renderWindow = function (leftCorner) {
      var renderIndex = [];
      var indexForRender = 0;
      var windowSize = {
        width: 2,
        height: 2
      }
      for (var i = leftCorner.x; i < leftCorner.x + windowSize.width; i++) {
        for (var j = leftCorner.y; j < leftCorner.y + windowSize.height; j++) {
          // console.log(it.locate(i - leftCorner.x, j - leftCorner.y, windowSize.width));
          // console.log(it.locate(i, j, it.size.width));
          // console.log('i', i);
          // console.log('j', j);
          indexForRender = it.locate(i - leftCorner.x, j - leftCorner.y, windowSize.width);
          if ((i>=it.size.width) || (j>=it.size.height)) { //if coords of window out of map size
            it.renderCells[it.locate(i - leftCorner.x, j - leftCorner.y, windowSize.width)] = null;
            renderIndex[indexForRender] = null;
          } else {
            renderIndex[indexForRender] = it.locate(i,j,it.size.width);
            it.renderCells[indexForRender] = it.cells[renderIndex[indexForRender]];
          }

        }
      }
      // console.log('renderCells', it.renderCells);
      // console.log(renderIndex);
      return renderIndex;
    }

  }

  // MIN MAP

  service.copyMinMap = function (inputMinMap) {
    service.minMap = inputMinMap;
    console.log(service.minMap);
  }

  // MAP INITIALIZATION

  var MapData = {
  	size: {
  		width: 10,
  		height: 10
  	}
  }

  var map = new MapClass();

  map.init(MapData)

  map.cells[1].isResource = true;
  map.cells[1].isFree = false;
  map.cells[1].prisonedId = 1;

  map.cells[0].isResource = false;
  map.cells[0].isFree = false;
  map.cells[0].prisonedId = 1;

  map.cells[11].isResource = false;
  map.cells[11].isFree = false;
  map.cells[11].prisonedId = 2;

  service.getMap = function () {
    return map;
  }

  service.unit = unitFactory.getUnit();
  service.resource = resFactory.getRes();
  service.player = playerFactory.getPlayer();


  service.cellClick = function(cell) {
    // console.log(this);

    service.selection = unitFactory.getSelection();
    // console.log(service.selection);
    if (service.selection.num == 0) {
      if (cell.isFree) {
        console.log(cell);
        console.log('this cell is empty');
      } else
      if (cell.isResource) {
        console.log(cell);
        console.log('this cell is Resource');
      } else {
        unitFactory.selectUnit(cell);
      }
    } else {
      if (cell.isFree) {
        unitFactory.copyMap(map);
        unitFactory.copyRes(service.resource);
        unitFactory.copyPlayer(service.player);
        service.selection.obj.think(cell);
      } else
      if (cell.isResource){
        unitFactory.copyMap(map);
        unitFactory.copyRes(service.resource);
        unitFactory.copyPlayer(service.player);
        service.selection.obj.think(cell);

      } else {
        if (service.selection.obj.unitId == cell.prisonedId) {
          service.selection = unitFactory.deselectUnit(cell);
        } else {
          unitFactory.copyMap(map);
          unitFactory.copyRes(service.resource);
          unitFactory.copyPlayer(service.player);
          service.selection.obj.think(cell);
        }
      }

    }
  }
  // }
  // console.log('mapFactory loaded' , service.map);
  return service;
})
