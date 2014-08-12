'use strict';

/* Controllers */

var app = angular.module('myApp', ['myApp.constants'])

.controller('TailNgCtrl', ['$scope', 'heelHeightConst', function(scope, heelHeightConst){
  var history_limit = 10;
  scope.welcome = "Tail Bearing Calcuation";
  scope.data = {
    wall_list: ['2x4', '2x6'],
    roof_pitch_list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    lumber_list: ['2x10', '2x12', '2x8', '1.5x11.875LVL']
  };

  // Display hell height when user click on 'Heel Height' button        
  scope.getHeelHeight = function(){
    var current_params = {wall: scope.wall, roof_pitch: scope.roof_pitch, lumber: scope.lumber, heel_height: ''};
    if(current_params.wall && current_params.roof_pitch && current_params.lumber){
      var concateInput = (current_params.wall + '-' + current_params.roof_pitch + '-' + current_params.lumber);
      scope.heel_height = heelHeightConst[concateInput];
      current_params.heel_height = scope.heel_height;

      if(scope.result_history.length == history_limit){
        scope.removeHistoryRecord(0);
      }

      scope.result_history.push(current_params);
      scope.isError = false;
      scope.isLock = true;
    }else{
      scope.isError = true;
    }
  }

  // Reset & enable form
  scope.doReset = function(){
    constructor();
  }

  // Remove specific record from history list
  scope.removeHistoryRecord = function(historyRecordIndex){
    scope.result_history.splice(historyRecordIndex, 1);      
  }

  // Clear history list
  scope.clearHistory = function(){
    scope.result_history = [];
  }

  var constructor = function(){
    scope.isError = false;
    scope.isLock = false;
    scope.heel_height = "0";
    scope.wall = "";
    scope.roof_pitch = "";
    scope.lumber = "";
  }

  constructor();
  scope.clearHistory();

}])