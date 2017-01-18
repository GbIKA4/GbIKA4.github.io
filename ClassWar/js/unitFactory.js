angular.module('app').factory('unitFactory', function (resFactory) {
  var service = {};

  // CLASS UNIT

  var UnitClass = function (argument) {

  	var it = this;
    it.isSelected = false;
  	it.class = argument.class; //class -> template of unit skills, that can be save for re-use
  	it.hp = argument.hp; //hit points
  	it.dp = argument.dp; //damage points
  	it.playerId = argument.playerId;
    it.unitId = argument.unitId;
  	it.coords = argument.coords; //coords -> {x:unitX, y:unitY}
  	it.sp = argument.sp;	//skill points
  	it.carry = argument.carry; //how much does it carry resources for example
  	it.res = {
  		id: null,
  		type: null,
  		quantity: 0
  	}	//resource -> {type: UniResource, carryQuantity: unitCarryQuantity}
  	it.targ = {
  		id: null
  	}// target
  	// if target = freeCell {it.move} else{
  		// if target = resource {it.gather}
  		// if target = enemy {it.attack}
  	// }
  	// if target.player!=it.player = target -> enemy

  	it.think = function (what) {
  		if (what.isFree == true){
  			console.log("unit", it.unitId, ' moved from x:', it.coords.x, ' y:', it.coords.y);
  			it.move(what);
  			console.log('to x:', it.coords.x, ' y:', it.coords.y);
  			return it;
  		} else
  		if (what.isResource == true){
  			it.gather(what);
  			console.log("unit", it.unitId, ' gathered ', it.res.quantity,' ', it.res.type);
  			return service.res[what.prisonedId];
  		} else
  		if (service.player[unit[what.prisonedId].playerId].relation[it.playerId] === false){
  			it.attack(what);
  			return unit[what.prisonedId];
  		}
  		return unit[what.prisonedId];
  	}

  	it.move = function (target) {
  		service.map.cells[it.locate()].isFree = true;
  		service.map.cells[it.locate()].prisonedId = null;
      service.minMap.cells[it.locate()].status = 'f';

      var targetIndex = service.map.locate(target.coords.x, target.coords.y, service.map.size.width);
      service.minMap.cells[targetIndex].status = 'u';

  		it.coords = target.coords;
  		target.isFree = false;
  		target.prisonedId = it.unitId;
  	}
    it.locate = function () { // turn pair coordinates (x,y) into 1 num, to use in Array
      return it.coords.x * service.map.size.width + it.coords.y;
    }
  	it.dead = function () { //death doesn't accept arguments
  		// death.animation
      if (it.res.quantity>0) {
        var newRes = {
          type: it.res.type,
          quantity: it.res.quantity,
          coords: it.coords
        }
        console.log('before');
        console.log('service.res', service.res);
        service.res = resFactory.makeRes(newRes);
        console.log('after');
        console.log('service.res', service.res);
      }
      unit[0] = unit[unit.length-1]; // buffer unit = last unit -> save last unit if buffer (0-unit)
  		unit[unit.length-1] = unit[it.unitId]; // last unit = unit to kill
      unit[it.unitId] = unit[0]; //unit to kill = buffer unit -> place saved in buffer last unit instant unit to kill
      unit[it.unitId].unitId = it.unitId; //saved last unit now have other index in Arr, so we have to change it unitId
      service.map.cells[unit[it.unitId].locate()].prisonedId = unit[it.unitId].unitId; //update saved unit cell (if this unit were last - its id had been changed)

  		unit.length--;
  		service.player[it.playerId].pop--;

      console.log("player" , it.playerId, " population:", service.player[it.playerId].pop);
  		if (service.player[it.playerId].pop<=0) {
  			console.log('player', it.playerId, ' lose');
  		}
  		return service.player[it.playerId].pop;
  	}

  	it.attack = function (target) {
  		// enemy.hp=-it.dp
  		// if enemy.hp <= 0 {enemy.dead}
  		// if it.hp <= 0 {it.dead}
  		it.targ.id = target.prisonedId;

  		unit[it.targ.id].hp -= this.dp;
  		console.log("unit", it.unitId, ' hit unit', this.dp, ' damage to unit', it.targ.id);
  		if (unit[it.targ.id].hp<=0){
        var oldResLenght = service.res.length;
        var targetIndex = service.map.locate(target.coords.x, target.coords.y, service.map.size.width);
  			console.log("unit", it.unitId, ' killed unit', it.targ.id);
  			unit[it.targ.id].dead();
        var newResLenght = service.res.length;
        if (newResLenght == oldResLenght) {
          target.clear();
          service.minMap.cells[targetIndex].status = 'f';
        } else {
          target.isResource = true;
          target.prisonedId = service.res[service.res.length-1].id;
          service.minMap.cells[targetIndex].status = 'r';
        }
  		}

  		return it.targ;
  	}

  	it.gather = function (target) {
  		it.res.id = target.prisonedId;
  		it.res.type = service.res[it.res.id].type;
  		if (service.res[it.res.id].quantity <= it.carry){
  			it.res.quantity = service.res[it.res.id].quantity;

  			service.res[0] = service.res[service.res.length-1];
  			service.res[service.res.length-1] = service.res[it.res.id];
  			service.res[it.res.id] = service.res[0];

  			service.res.length--;
        var targetIndex = service.map.locate(target.coords.x, target.coords.y, service.map.size.width);
        service.minMap.cells[targetIndex].status = 'f';
  			target.clear();

  		} else {
  			it.res.quantity = it.carry;
  			service.res[it.res.id].quantity -= it.carry;
  		}
  		// console.log(resource[it.res.id]);
  		// return it.res;
  	}

  	it.info = function () {
      console.log("unit id:", it.unitId);
  		console.log("class:", it.class);
  		console.log("player:", it.playerId);
  		console.log("hit points:", it.hp);
  		console.log("damage points:", it.dp);
      console.log("coordinates:", it.coords);
      console.log("resource:", it.res);
      console.log("is selected:", it.isSelected);
      console.log("target:", it.targ);
  		return it;
  	}
  }

  // EXAMPLES OF CLASSES

  // UNITS

  var unit = [];

  unit[1] = new UnitClass({
  	class : 'warrior',
  	hp : 100,
  	dp : 10,
  	sp: 5,
  	carry: 10,
    playerId: 1,
  	unitId: 1,
  	coords: {
  		x:0,
  		y:0
  	}
  });

  unit[2] = new UnitClass({
  	class : 'warrior',
  	hp : 100,
  	dp : 100,
  	sp: 5,
  	carry: 10,
    playerId: 2,
  	unitId: 2,
  	coords: {
  		x:1,
  		y:1
  	}
  });

  var selection = {
    num: 0,
    obj: {}
  };

  service.selectUnit = function (cell) {
    unit[cell.prisonedId].isSelected = true;

    selection.obj = unit[cell.prisonedId];
    selection.num = 1;

    console.log('unitId:', cell.prisonedId);
    console.log('selection', selection);
  }

  service.deselectUnit = function (cell) {
    selection = {
      num: 0,
      obj: {}
    };
    unit[cell.prisonedId].isSelected = false;
    console.log(unit[cell.prisonedId]);
    console.log('selection', selection);
    return selection;
  }

  service.getSelection = function () {
    return selection;
  }

  service.getUnit = function () {
    return unit;
  }

  service.copyMap = function(inputMap) {
      service.map = inputMap;
  }

  service.copyMinMap = function(inputMinMap) {
      service.minMap = inputMinMap;
      console.log(service.minMap);
  }

  service.copyRes = function(inputRes){
       service.res = inputRes;
  }

  service.copyPlayer = function(inputPlayer){
      service.player = inputPlayer;
  }
  return service;
})
