var searchTerm;
var beginDate;
var endDate;
var queryResults = [];

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=donaldtrump&api-key=TnjsUG68GH5qaLNjiIEP84RB7OLNMZS5"
//ajax call with get method 
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then( function(response){

        console.log(response);
        // for(i=0; i<10;i++){
        //     var headline = response.headline[i];
        // }
      });
      
      
      
      //&begin_date="+beginDate+"&end_date="+endDate+
    