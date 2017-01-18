angular.module('app').factory('resFactory', function () {
  var service = {};

  // CLASS RESOURCE
  var RecourceClass = function (argument) {
  	var it = this;
  	it.type = argument.type;
  	it.quantity = argument.quantity;
  	it.coords = argument.coords;
  	it.id = argument.id;
    it.img = "img/res/" + it.type + ".png";
  }

  var resource = []
  		resource[1] = new RecourceClass({
  			type: 'Wood',
  			quantity: 10,
  			coords:{
  				x: 1,
  				y: 1
  			},
  			id: 1
  		})
      service.makeRes = function (newRes) {
        resource[resource.length] = new RecourceClass({
          type: newRes.type,
          quantity: newRes.quantity,
          coords: newRes.coords,
          id: resource.length
        });
        return resource;
      }

      service.getRes = function () {
        return resource;
      }


  return service;
})
