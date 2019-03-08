var searchTerm;
var beginDate;
var endDate;
var queryResults = [];

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&begin_date="+beginDate+"&end_date="+endDate+"&api-key=TnjsUG68GH5qaLNjiIEP84RB7OLNMZS5"
//ajax call with get method 
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
        for(i=0; i<10;i++){
            var headline = response.headline[i];
        }
      });
      
      
      
      
    