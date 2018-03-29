
$("#searchMe").on("click", function () {

  var search_term = $("#searchTerm").val();
  var numb_records = $("#numbRecords").val();
  var start_year = $("#startYear").val();
  var end_year = $("#endYear").val();

  var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  queryUrl += '?' + $.param({
    'api-key': "9652878909cb4e5584a00be6cc2abfa9",
    'q': search_term,
    'begin_date': start_year+"0101",
    'end_date': end_year+"1231",
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
  