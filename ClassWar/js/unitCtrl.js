angular.module('app').controller('unitCtrl', function (unitFactory) {
  this.unit = unitFactory.getUnit();
  // console.log(this.unit[1]);
})
