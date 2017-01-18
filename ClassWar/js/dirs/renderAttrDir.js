angular.module('app').directive('renderAttrDir', function () {
  return {
    template:'<div ng-if="mapCtrl.clickedCell.isUnit">' +
                '<render-unit-attr-dir></render-unit-attr-dir>' +
      				'</div>' +
              '<div ng-if="mapCtrl.clickedCell.isFree">' +
                '<render-cell-attr-dir></render-cell-attr-dir>' +
              '</div>' +
              '<div ng-if="mapCtrl.clickedCell.isResource">' +
                '<render-res-attr-dir></render-res-attr-dir>' +
              '</div>',

    link: function () {
    }
  }
})
