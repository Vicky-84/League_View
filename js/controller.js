
var myApp = angular.module('blogApp', ['ngRoute','angular-loading-bar']); 


// Controller to get the data from each of the JSON 
myApp.controller('mainController',['$http',function($http) {


  var main = this;

  this.year =[{"name":"2015"},{"name":"2016"},{"name":"2017"}];
    
  this.teams =[{"name":"Manchester United"},{"name":"Tottenham Hotspur"},{"name":"Bournemouth"},{"name":"Aston Villa"},{"name":"Everton"},{"name":"Watford"},{"name":"Leicester City"},{"name":"Sunderland"},{"name":"Norwich"},{"name":"Crystal Palace"},{"name":"Chelsea"},{"name":"Swansea"},{"name":"Arsenal"},{"name":"West Ham United"},{"name":"Newcastle United"},{"name":"Southampton"},{"name":"Stoke City"},{"name":"Liverpool"},{"name":"West Bromwich Albion"},{"name":"Manchester City"},{"name":"Hull City"},{"name":"Middlesbrough"},{"name":"Burnley"}];    
  
  
  this.match = [];
  this.match1 = [];    
  console.log(this.match);

  this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
  this.baseUrl1 ='https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';    

 //Function to get data for 2016/17 Matches    
    
  this.loadAllMatches = function(){
   
      $http({
        method: 'GET',
        url: main.baseUrl
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          
          console.log(response);
          main.match= response.data.rounds;
          console.log(main.match);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


  }
  
  //Function to get data for 2015/16 Matches    
  
  this.loadAllMatches1 = function(){
   
      $http({
        method: 'GET',
        url: main.baseUrl1
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          
          console.log(response);
          console.log(main.year1);
          main.match1= response.data.rounds;
          console.log(main.match1);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


  }
  

}]);



//Controller to get the details of single match

myApp.controller('allMatchView',['$location',function($location) {

  //create a context
  var main = this;
      
  this.match = [];
  this.round = [];    
    
  this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';    

  this.loadSingeMatch = function(rounds,matches){
      
      console.log(rounds);
      console.log(matches);
   
      
          main.match=matches;
          main.round=rounds;
          console.log(main.round);
          console.log(main.match);
          main.matchEvent = main.round.name;
          main.matchTeam1 = main.match.team1.name;
          main.matchTeam2 = main.match.team2.name;
          main.score1 = main.match.score1;
          main.score2 = main.match.score2;
          console.log(main.matchEvent);
          console.log(main.matchTeam1);
          console.log(main.matchTeam2);
          
         $location.path("matchview/"+main.matchEvent+"/"+main.matchTeam1+"/"+main.matchTeam2+"/"+main.score1+"/"+main.score2);
          
  }
  

}]); 

//Controller to get the details of single match

myApp.controller('singleMatchController',['$location',function($location) {

  //create a context
  var main = this;
      
  this.match = [];
  this.round = [];    
    
  this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';    

  this.loadSingeMatch = function(rounds,matches){
      
      console.log(rounds);
      console.log(matches);
   
      
          main.match=matches;
          main.round=rounds;
          console.log(main.round);
          console.log(main.match);
          main.matchEvent = main.round.name;
          main.matchTeam1 = main.match.team1.name;
          main.matchTeam2 = main.match.team2.name;
          main.score1 = main.match.score1;
          main.score2 = main.match.score2;
          console.log(main.matchEvent);
          console.log(main.matchTeam1);
          console.log(main.matchTeam2);
          
         $location.path("matchview/"+main.matchEvent+"/"+main.matchTeam1+"/"+main.matchTeam2+"/"+main.score1+"/"+main.score2);
      
         
  }

}]);

//Controller to get details of single match

myApp.controller("matchCenter", ['$routeParams',function($routeParams){
    
    var main=this;
  
    this.day =$routeParams.matchDay;
    this.team1=$routeParams.Team1;
    this.team2=$routeParams.Team2;
    this.score1=$routeParams.score1;
    this.score2=$routeParams.score2;
      
    console.log(this.day,this.team1,this.team2,this.score1,this.score2);
}]);


//Controller to get the details of single team

myApp.controller('teamDetails',['$http','$routeParams',function($http,$routeParams) {

  //create a context
  var main = this;

  this.match = [];
  console.log(this.match);
  
  this.name=$routeParams.teamName;
    
  this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';

  this.loadDetails = function(){
   
      $http({
        method: 'GET',
        url: main.baseUrl
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          
          console.log(response);
          
          main.match= response.data.rounds;
          console.log(main.matches);
          
          main.matchesPlayed=0;
          main.goalScored=0;
          main.goalAgainst=0;
          main.won=0;
          main.lost=0;
          main.draw=0;
          main.cleanSheet=0;
          
          for(i in main.match){
                console.log(i);
              for(j in main.match[i].matches){
                  console.log(main.match[i].matches[j]);
                  
                  if(main.match[i].matches[j].team1.name===main.name){
                      main.matchesPlayed=main.matchesPlayed+1;
                      main.goalScored=main.goalScored+main.match[i].matches[j].score1;
                      main.goalAgainst=main.goalAgainst+main.match[i].matches[j].score2;
                      if(main.match[i].matches[j].score1>main.match[i].matches[j].score2)
                          main.won=main.won+1; 
                          else if(main.match[i].matches[j].score2>main.match[i].matches[j].score1)
                              main.lost=main.lost+1;
                          else
                              main.draw=main.draw+1; 
                      if(main.match[i].matches[j].score2===0)
                          main.cleanSheet=main.cleanSheet+1;
                  }
                  else if(main.match[i].matches[j].team2.name===main.name){
                      main.matchesPlayed=main.matchesPlayed+1;
                      main.goalScored=main.goalScored+main.match[i].matches[j].score2;
                      main.goalAgainst=main.goalAgainst+main.match[i].matches[j].score1;
                      if(main.match[i].matches[j].score2>main.match[i].matches[j].score1)
                          main.won=main.won+1; 
                          else if(main.match[i].matches[j].score1>main.match[i].matches[j].score2)
                              main.lost=main.lost+1;
                          else
                              main.draw=main.draw+1; 
                      if(main.match[i].matches[j].score1===0)
                          main.cleanSheet=main.cleanSheet+1;
              }
                  else
                      continue;
          }
          console.log(main.matchesPlayed,main.goalScored,main.goalAgainst,main.won,main.lost,main.draw);
          }

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


  }
   


}]); 


//Controller to get the details of single team

myApp.controller('teamDetails1',['$http','$routeParams',function($http,$routeParams) {

  //create a context
  var main = this;

  this.match = [];
  console.log(this.match);
  
  this.name=$routeParams.teamName;
    
  this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';

  this.loadDetails = function(){
   
      $http({
        method: 'GET',
        url: main.baseUrl
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          
          console.log(response);
          
          main.match= response.data.rounds;
          console.log(main.matches);
          
          main.matchesPlayed=0;
          main.goalScored=0;
          main.goalAgainst=0;
          main.won=0;
          main.lost=0;
          main.draw=0;
          main.cleanSheet=0;
          
          for(i in main.match){
                console.log(i);
              for(j in main.match[i].matches){
                  console.log(main.match[i].matches[j]);
                  
                  if(main.match[i].matches[j].team1.name===main.name){
                      main.matchesPlayed=main.matchesPlayed+1;
                      main.goalScored=main.goalScored+main.match[i].matches[j].score1;
                      main.goalAgainst=main.goalAgainst+main.match[i].matches[j].score2;
                      if(main.match[i].matches[j].score1>main.match[i].matches[j].score2)
                          main.won=main.won+1; 
                          else if(main.match[i].matches[j].score2>main.match[i].matches[j].score1)
                              main.lost=main.lost+1;
                          else
                              main.draw=main.draw+1; 
                      if(main.match[i].matches[j].score2===0)
                          main.cleanSheet=main.cleanSheet+1;
                  }
                  else if(main.match[i].matches[j].team2.name===main.name){
                      main.matchesPlayed=main.matchesPlayed+1;
                      main.goalScored=main.goalScored+main.match[i].matches[j].score2;
                      main.goalAgainst=main.goalAgainst+main.match[i].matches[j].score1;
                      if(main.match[i].matches[j].score2>main.match[i].matches[j].score1)
                          main.won=main.won+1; 
                          else if(main.match[i].matches[j].score1>main.match[i].matches[j].score2)
                              main.lost=main.lost+1;
                          else
                              main.draw=main.draw+1; 
                      if(main.match[i].matches[j].score1===0)
                          main.cleanSheet=main.cleanSheet+1;
              }
                  else
                      continue;
          }
          console.log(main.matchesPlayed,main.goalScored,main.goalAgainst,main.won,main.lost,main.draw);
          }

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


  }
   


}]);


