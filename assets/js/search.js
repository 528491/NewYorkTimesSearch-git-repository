
$("#searchMe").on("click", function () {

  var search_term = document.getElementById("searchTerm").value;
  var numb_records = document.getElementById("numbRecords").value;
  var start_year = document.getElementById("startYear").value;
  var end_year = document.getElementById("endYear").value;


  var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  queryUrl += '?' + $.param({
    'api-key': "9652878909cb4e5584a00be6cc2abfa9",
    'q': "obama",
    'begin_date': "20080101",
    'end_date': "20161231",
    'sort': "newest",
    'fl': "web_url,keywords,headline,pub_date,source",
    'facet_field': "main"
  });
  $.ajax({
    url: queryUrl,
    method: 'GET',
  }).then(function(response) {
    console.log(response);
  }).fail(function(err) {
    throw err;
  });

});
  