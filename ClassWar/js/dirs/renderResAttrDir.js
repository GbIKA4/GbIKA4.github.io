angular.module('app').directive('renderResAttrDir', function () {
  return {
    template: '<div ng-controller="resCtrl as resCtrl">' +
                'Cell Status: Resource <br>' +
                'Res Type: {{resCtrl.resource[mapCtrl.clickedCell.prisonedId].type}} <br>' +
                'Res Quantity: {{resCtrl.resource[mapCtrl.clickedCell.prisonedId].uantity}} <br>' +
                'Cell X: {{mapCtrl.clickedCell.coords.x}} <br>' +
                'Cell Y: {{mapCtrl.clickedCell.coords.y}} <br>' +
              '</div>',
    link: function () {

    }
  }
})
