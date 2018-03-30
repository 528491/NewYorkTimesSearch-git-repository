
$("#searchBtn").on("click", function () {

  var search_term = $("#searchTerm").val();
  var numb_records = $("#numbRecords").val();
  var start_year =   $("#startYear").val();
  if(start_year ==""){
    start_year="1800";
  }
  var end_year = $("#endYear").val();
  var d=new Date();
  if(end_year ==""){
    end_year= (d.getFullYear()).toString();;
  }
  var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  queryUrl += '?' + $.param({
    'api-key': "9652878909cb4e5584a00be6cc2abfa9",
    'q': search_term,
    'begin_date': start_year+"0101",
    'end_date': end_year+"1231",
    'sort': "newest",
    'fl': numb_records,
    'facet_field': "main"
  });
  console.log("search_term: "+ search_term);
  $.ajax({
    url: queryUrl,
    method: 'GET',
  }).then(function(response) {
    console.log(response);
    console.log(queryUrl);

    var results  = response.response;
    console.log(response.response);
    var i= 0; 
    var newSubDiv = $("<div>");
    var newUL = $("<ul>");
    for(i=0;i<results.docs.length;i++){
     
     // newSubDiv.text(results.docs[i].headline.main);
      
      var newLi = $("<li>");
      var newLink = $("<a>");
      newLink.attr("href", results.docs[i].web_url);
      newLink.attr("target","_blank");
      newLink.text(results.docs[i].headline.main);
    //  newLi.text(results.docs[i].headline.main);
      newLi.append(newLink);
      newUL.append(newLi);}
     // newLi.text(results.docs[i].headline.main);
     newSubDiv.append(newUL);
      $("#results-area").append(newSubDiv);   
    

  }).fail(function(err) {
    throw err;
  });


});
  