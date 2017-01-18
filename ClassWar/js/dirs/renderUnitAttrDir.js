angular.module('app').directive('renderUnitAttrDir', function () {
  return {
    template:'<div ng-controller="unitCtrl as unitCtrl">' +
                  '<div ng-controller="playerCtrl as playerCtrl">' +
                          '<div class="{{playerCtrl.player[unitCtrl.selection.obj.playerId].color}}">' +
                  					'Cell Status: Unit <br>' +
                  					'Unit Player: {{unitCtrl.selection.obj.playerId}} <br>' +
                  					'Unit Class: {{unitCtrl.selection.obj.class}} <br>' +
                  					'Unit HP: {{unitCtrl.selection.obj.hp}} <br>' +
                  					'Unit DP: {{unitCtrl.selection.obj.dp}} <br>' +
                  					'Unit SP: {{unitCtrl.selection.obj.sp}} <br>' +
                  					'Unit X coord: {{unitCtrl.selection.obj.coords.x}} <br>' +
                  					'Unit Y coord: {{unitCtrl.selection.obj.coords.y}} <br>' +
                  					'Unit Res Type: {{unitCtrl.selection.obj.res.type}} <br>' +
                  					'Unit Res Quantity: {{unitCtrl.selection.obj.res.quantity}}' +
                          '</div>' +
                  '</div>' +
      				'</div>',
    link: function () {
    }
  }
})
