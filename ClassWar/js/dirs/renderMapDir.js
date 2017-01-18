angular.module('app').directive('renderMapDir', function () {
  return {
    template:'<div class="cell" ng-repeat="renderCells in mapCtrl.map.renderCells track by $index" ng-click="mapCtrl.cellClick(mapCtrl.map.renderCells[$index])">' +
      					'X: {{renderCells.coords.x}} <br>' +
                'Y: {{renderCells.coords.y}} <br>' +
                '<div ng-if="renderCells.isUnit">' +
                  '<render-unit-dir></render-unit-dir>' +
                '</div>' +
                '<div ng-if="renderCells.isBuild">' +
                  '<render-builds-dir></render-builds-dir>' +
                '</div>' +
                '<div ng-if="renderCells.isFree">' +
                  'Status: Free' +
                '</div>' +
                '<div ng-if="renderCells.isResource">' +
                  '<render-res-dir></render-res-dir>' +
                '</div>' +
      				'</div>',
    link: function (scope, element, attrs) {

    }
  }
});
