angular.module('app').factory('buildFactory', function () {
  var service = {};

  // CLASS BUILD

  function BuildingClass () {
    it = this;
    it.id = 0;
    it.playerId = 0;
    it.class = "house";
    it.coords = [{
      x:0,
      y:0
    }]
    it.hp = 0;
    it.img = "img/builds/" + it.class + ".png";
  }

  var builds = [];
  builds[1] = new BuildingClass();
  builds[1].id = 1;
  builds[1].coords[0] = {
    x:2,
    y:0
  }
  builds[1].coords[0] = {
    x:2,
    y:1
  }

  service.getBuilds = function () {
    return builds;
  }

  return service;
})
