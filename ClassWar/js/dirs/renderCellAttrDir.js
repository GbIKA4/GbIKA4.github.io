angular.module('app').directive('renderCellAttrDir', function () {
  return {
    template: '<div>' +
    						'Cell Status: Free <br>' +
    						'Cell X: {{mapCtrl.clickedCell.coords.x}} <br>' +
    						'Cell Y: {{mapCtrl.clickedCell.coords.y}} <br>' +
    					'</div>',
    link: function () {

    }
  }
})
