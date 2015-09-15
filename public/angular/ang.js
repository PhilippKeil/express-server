(function () {
  var app = angular.module('website', [])

  app.factory("dbAccessService", function () {
    var dataArray = []

    return {
      returnData: function() {
        return dataArray;
      },
      addEntry: function(data){
        dataArray.push(data);
      }
    };
  });

  app.controller("inputFieldController", function ($scope, dbAccessService) {
     this.sampleText = '';
     this.onClick = function (text) {
       if (text.length !== 0) dbAccessService.addEntry(text);
     };
  });

  app.controller('savedlistController', function ($scope, dbAccessService) {
    this.sampleData = dbAccessService.returnData();
  });
})();
