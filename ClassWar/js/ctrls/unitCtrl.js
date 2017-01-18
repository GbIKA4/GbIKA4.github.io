angular.module('app').controller('unitCtrl', function (unitFactory) {
  this.unit = unitFactory.getUnit();
  this.selection = unitFactory.getSelection();
  // console.log(this.unit[1]);
})
