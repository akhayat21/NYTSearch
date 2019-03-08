var searchTerm;
var beginDate;
var endDate;

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&begin_date="+beginDate"&end_date="+endDate+"&api-key=TnjsUG68GH5qaLNjiIEP84RB7OLNMZS5"
//ajax call with get method 
      $.ajax({
        url: queryURL,
        method: "GET"
      })
      
      
      
      
     for (var i = 0; i < results.length; i++) {