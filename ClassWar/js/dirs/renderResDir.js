angular.module('app').directive('renderResDir', function () {
  return {
    template: '<div class="res" ng-controller="resCtrl as resCtrl">' +
    						'<div class="res-show">{{resCtrl.resource[renderCells.prisonedId].type}} Id {{renderCells.prisonedId}}</div>' +
                '<img src="{{resCtrl.resource[renderCells.prisonedId].img}}"' +
                      'alt="{{resCtrl.resource[renderCells.prisonedId].type}}"' +
                      'title="{{resCtrl.resource[renderCells.prisonedId].type}}">' +
    					'</div>',
    link: function (scope, element, attrs) {

    }
  }
})
