
myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
        
           templateUrl		: 'views/index-view.html',
        
        })
    
        .when('/home',{
            
        	templateUrl		: 'views/index-view.html',
        	
           
        })
    
         .when('/results',{
            
        	templateUrl		: 'views/result-view.html',
            controller 		: 'mainController',
        	controllerAs 	: 'myMatch'
        	 
           
        })
    
        .when('/matchview/:matchDay/:Team1/:Team2/:score1/:score2',{
        	templateUrl     : 'views/match-view.html',
        	controller 		: 'matchCenter',
        	controllerAs 	: 'singleMatch'
        })
    
        .when('/team/:teamName',{
        	templateUrl     : 'views/team-view.html',
        	controller 		: 'teamDetails',
        	controllerAs 	: 'teamView'
        })

        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);