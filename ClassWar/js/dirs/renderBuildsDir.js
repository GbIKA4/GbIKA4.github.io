angular.module('app').directive('renderBuildsDir', function () {
  return{
    template:'<div class="builds" ng-controller="buildCtrl as buildCtrl">' +
                '<div ng-controller="playerCtrl as playerCtrl">' +
      						'<div class="builds-show {{playerCtrl.player[buildCtrl.builds[renderCells.prisonedId].playerId].color}}">' +
                  '{{buildCtrl.builds[renderCells.prisonedId].class}}' +
                  ' Pl {{buildCtrl.builds[renderCells.prisonedId].playerId}}<br>' +
  								'<img src="{{buildCtrl.builds[renderCells.prisonedId].img}}"' +
  											'alt="{{buildCtrl.builds[renderCells.prisonedId].alt}}"' +
  											'title="{{buildCtrl.builds[renderCells.prisonedId].alt}}">' +
                '</div>' +
    					'</div>',
    link: function (scope, element, attrs) {

    }
  }
})
