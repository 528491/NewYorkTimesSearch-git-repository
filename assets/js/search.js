
$("button").click (function () {
    var search_title = document.getElementById("search_title").value;
    var records_limit = document.getElementById("limit").value;

    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search_term + "&api-key=9652878909cb4e5584a00be6cc2abfa9";
 
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
    
        var title = response.docs.main;
        console.log(title);
        console.log(response);
      });

});
  