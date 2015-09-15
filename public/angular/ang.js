(function () {
  var app = angular.module('website', [])

  app.factory("dbAccess", function () {
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

  app.controller("entryField", function ($scope, dbAccess) {
     this.sampleText = '';
     this.onClick = function (text) {
       dbAccess.addEntry(text);
     };
  });

  app.controller('recentList', function ($scope, dbAccess) {
    this.sampleData = dbAccess.returnData();
  });
})();
