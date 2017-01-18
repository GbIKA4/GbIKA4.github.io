angular.module('app').controller('resCtrl', function (resFactory) {
  this.resource = resFactory.getRes();
  // console.log('resCtrl loaded');
})
