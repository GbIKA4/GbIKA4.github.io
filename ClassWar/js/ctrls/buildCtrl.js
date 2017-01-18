angular.module('app').controller('buildCtrl', function (buildFactory) {
  this.builds = buildFactory.getBuilds();
});
