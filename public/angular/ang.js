(function () {
  var app = angular.module('website', [])

  app.factory("addtoDB", function () {
    var sampleData = ['hi', 'hallo']

    return {
      test: function() {
        return sampleData;
      },
      add2: function(data){
        alert('adding ' + data);
        sampleData.push(data);
      }
    };
  });

  app.controller("entryField", function ($scope, addtoDB) {
     this.sampleText = '';
     this.onClick = function (text) {
       alert('test' + addtoDB.test());
       addtoDB.add2(text);
     };
  });

  app.controller('recentList', function ($scope, addtoDB) {
    this.sampleData = addtoDB.test();
  });
})();
