angular.module('app').factory('mapFactory', function (resFactory, unitFactory, playerFactory) {
  var service = {};

  // CLASS MAP -> MAP = ARR OF MAPCELL

  var MapCell = function (argument) {

  	var it = this;

    it.isFree = argument.isFree;

    it.isResource = argument.isResource;

    it.isUnit = argument.isUnit;

    it.isBuild = argument.isBuild;

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
      it.isUnit = false;
  		it.isBuild = false;
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
  				it.cells[i + (it.size.height * j)] = new MapCell({
  					isFree : true,
            isResource : false,
            isUnit : false,
  					isBuild : false,
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
      return x + (width * y);
    }

    it.renderWindow = function (leftCorner) {
      var renderIndex = [];
      var indexForRender = 0;
      var windowSize = {
        width: 3,
        height: 2
      }
      for (var i = 0; i < windowSize.width; i++) {
      	for (var j = 0; j < windowSize.height; j++) {
          indexForRender = it.locate(i, j, windowSize.width);
          if ((i+leftCorner.x>=it.size.width) || (j+leftCorner.y>=it.size.height)) { //if coords of window out of map size
            renderIndex[indexForRender] = null;
            it.renderCells[indexForRender] = null;
          } else {
            renderIndex[indexForRender] = it.locate(i+leftCorner.x, j+leftCorner.y, it.size.width);
            it.renderCells[indexForRender] = it.cells[renderIndex[indexForRender]];
          }
        }
      }
      return renderIndex;
    }

  }

  // MIN MAP

  service.copyMinMap = function (inputMinMap) {
    service.minMap = inputMinMap;
    // console.log(service.minMap);
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

  map.cells[0].isUnit = true;
  map.cells[0].isFree = false;
  map.cells[0].prisonedId = 1;

  map.cells[11].isUnit = true;
  map.cells[11].isFree = false;
  map.cells[11].prisonedId = 2;

  map.cells[map.locate(2,0,10)].isFree = false;
  map.cells[map.locate(2,0,10)].isBuild = true;
  map.cells[map.locate(2,0,10)].prisonedId = 1;

  map.cells[map.locate(2,1,10)].isFree = false;
  map.cells[map.locate(2,1,10)].isBuild = true;
  map.cells[map.locate(2,1,10)].prisonedId = 1;


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
        eventStr = 'this cell is empty';
        console.log(eventStr);
      } else
      if (cell.isResource) {
        eventStr = 'this cell is Resource';
        console.log(eventStr);
        console.log(cell);
      } else
      if (cell.isUnit) {
        unitFactory.selectUnit(cell);
      } else
      if (cell.isBuild) {

      }
    } else {
      if ((cell.isFree) || (cell.isResource))  {
        unitFactory.copyMap(map);
        unitFactory.copyRes(service.resource);
        unitFactory.copyPlayer(service.player);
        service.selection.obj.think(cell);
        eventStr = unitFactory.getEventStr()
      } else if (cell.isUnit) {
        if (service.selection.obj.unitId === cell.prisonedId) {
          service.selection = unitFactory.deselectUnit(cell);
        } else {
          unitFactory.copyMap(map);
          unitFactory.copyRes(service.resource);
          unitFactory.copyPlayer(service.player);
          service.selection.obj.think(cell);
          eventStr = unitFactory.getEventStr()

        }
      }

    }
  }

  var eventStr = unitFactory.getEventStr();

  service.getEventStr = function () {
    return eventStr;
  }
  return service;
})
