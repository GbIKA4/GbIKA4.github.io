angular.module('app').directive('renderBuildsAttrDir', function () {
  return {
    template:'<div ng-controller="buildsCtrl as buildsCtrl">' +
                  '<div ng-controller="playerCtrl as playerCtrl">' +
                          '<div class="{{playerCtrl.player[buildsCtrl.selection.obj.playerId].color}}">' +
                  					'Cell Status: Builds <br>' +
                  					'Builds Player: {{buildsCtrl.selection.obj.playerId}} <br>' +
                  					'Builds Class: {{buildsCtrl.selection.obj.class}} <br>' +
                  					'Builds HP: {{buildsCtrl.selection.obj.hp}} <br>' +
                  					'Builds DP: {{buildsCtrl.selection.obj.dp}} <br>' +
                  					'Builds SP: {{buildsCtrl.selection.obj.sp}} <br>' +
                  					'Builds X coord: {{buildsCtrl.selection.obj.coords.x}} <br>' +
                  					'Builds Y coord: {{buildsCtrl.selection.obj.coords.y}} <br>' +
                  					'Builds Res Type: {{buildsCtrl.selection.obj.res.type}} <br>' +
                  					'Builds Res Quantity: {{buildsCtrl.selection.obj.res.quantity}}' +
                          '</div>' +
                  '</div>' +
      				'</div>',
    link: function () {
    }
  }
})
