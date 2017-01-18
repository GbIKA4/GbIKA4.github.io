angular.module('app').factory('renderFactory', function (mapFactory, unitFactory, resFactory, playerFactory) {
  var service = {};
  service.map = mapFactory.getMap();
  service.unit = unitFactory.getUnit();
  service.res = resFactory.getRes();
  service.player = playerFactory.getPlayer();
  // console.log(service.map);
  // console.log(service.unit);
  // console.log(service.res);
  // console.log(service.player);
  return service;
})
