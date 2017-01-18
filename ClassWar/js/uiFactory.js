angular.module('app').factory('uiFactory', function (mapFactory, unitFactory, resFactory, playerFactory) {
  var service = {};
  service.mapWindow = {
    cellSize: 100, //size map cell in pixels (cube)
    windowSize: {
      width: 3,
      height: 3
    }, //size of map window in cells (cube)
    coords: { //coords of left coner of map window in cells
      x: 0,
      y: 0
    },
    // show: function () {
    //   for (var i = coords.x; i <= coords.x + windowSize.x; i++) {
    //     for (var j = coords.y; j <= coords.y + windowSize.y; j++) {
    //       cell[cell[x,y].locate()].show();
    //     }
    //   }
    // }
    // mapResize : function () {
    //   var cssSize = cellSize * mapSize.mapFactory.map.size.width + mapSize.mapFactory.map.size.width * 2;
    //   $('.map').css('width', cssSize);
    // }
  }
  var MinMapCell = function () {
    it = this;

    it.id = 0;

    it.status = 'f';

    it.coords = {
      x: 0,
      y: 0
    }

    it.show = function () {
      console.log(it);
    }
    it.clear = function () {
      it.status = 'f';
    }
  }

  var MinMap = function () {
    var it = this;
    it.style = '';
    it.ex = mapFactory.getMap();
    it.cells = [];
    it.size = {
      width: it.ex.size.width || 0,
      height: it.ex.size.height || 0
    }

    it.init = function () {
      for (var i = 0; i < it.ex.cells.length; i++) {
        it.cells[i] = new MinMapCell();
        it.cells[i].coords = it.ex.cells[i].coords;
        if (it.ex.cells[i].isFree === true) {
          it.cells[i].status = 'f';
        } else
        if (it.ex.cells[i].isResource === true) {
          it.cells[i].status = 'r';
        } else {
          it.cells[i].status = 'u';
        }
        it.cells[i].coords = it.ex.cells[i].coords;
        it.cells[i].id = i;
      }
    }

  }



  service.getMinMap = function () {
    return minMapWindow;
  }

  service.cellClick = function (cellId) {
    // console.log('Cell ID:', cellId);
    // console.log('X: ', minMapWindow.cells[cellId].coords.x);
    // console.log('Y: ', minMapWindow.cells[cellId].coords.y);
    var leftCorner = {
      x: minMapWindow.cells[cellId].coords.x,
      y: minMapWindow.cells[cellId].coords.y
    }


    var renderIndex = map.renderWindow(leftCorner);

    for (var i = 0; i < oldRenderIndex.length; i++) {
      if (oldRenderIndex[i] != null){
        minMapWindow.cells[oldRenderIndex[i]].style = null
      }
      // minMapWindow.cells[oldRenderIndex[i]].style = null;
    }

    for (var i = 0; i < renderIndex.length; i++) {
      if (renderIndex[i] != null) {
        minMapWindow.cells[renderIndex[i]].style = 'selected_cell';
      }
    }
    // console.log(map.renderCells);
    oldRenderIndex = renderIndex;
  }

// SCRIPT BODY

minMapWindow = new MinMap();

minMapWindow.init();

// FIRST MAP WINDOW COORDS SET

  var map = mapFactory.getMap();

  var startLeftCorner = {
    x: 0,
    y: 0
  }
  var oldRenderIndex = map.renderWindow(startLeftCorner);
  for (var i = 0; i < oldRenderIndex.length; i++) {
    minMapWindow.cells[oldRenderIndex[i]].style = 'selected_cell';
  }

  mapFactory.copyMinMap(minMapWindow);
  unitFactory.copyMinMap(minMapWindow);


  // service.eventWindow = {
  //   e: 'event'
  // }


  // service.mapWindow.mapResize();
  // service.saveGame = function () {
    // var saveUnit = JSON.stringify(unitFactory.getUnit());
    // var savePlayer = JSON.stringify(playerFactory.getPlayer());
    // var saveRes =  JSON.stringify(resFactory.getRes());
    // var saveMap =  JSON.stringify(mapFactory.getMap());

    // each Attr || filter -> for || lodash

    // console.log(unitFactory.getUnit());
    // console.log(playerFactory.getPlayer());
    // console.log(resFactory.getRes());
    // console.log(mapFactory.getMap());
    //
    // console.log(JSON.parse(saveUnit));
    // console.log(JSON.parse(savePlayer));
    // console.log(JSON.parse(saveRes));
    // console.log(JSON.parse(saveMap));

  // }
  // statusBarWindow{
  // }
  // createWindow{
  //
  // }
  // pictureWindow{
  //
  // }
  return service;
})
