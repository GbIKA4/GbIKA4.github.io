angular.module('app').directive('renderUnitDir', function () {
  return{
    template:'<div class="unit" ng-controller="unitCtrl as unitCtrl">' +
                '<div ng-controller="playerCtrl as playerCtrl">' +
      						'<div class="unit-show {{playerCtrl.player[unitCtrl.unit[renderCells.prisonedId].playerId].color}}">' +
                  '{{unitCtrl.unit[renderCells.prisonedId].class}}' +
                  ' Pl {{unitCtrl.unit[renderCells.prisonedId].playerId}}<br>' +
  								'<img src="{{unitCtrl.unit[renderCells.prisonedId].img}}"' +
  											'alt="{{unitCtrl.unit[renderCells.prisonedId].alt}}"' +
  											'title="{{unitCtrl.unit[renderCells.prisonedId].alt}}">' +
                '</div>' +
    					'</div>',
    link: function (scope, element, attrs) {

    }
  }
})
