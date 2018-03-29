
$("#searchBtn").on("click", function () {

  var search_term = $("#searchTerm").val();
  var numb_records = $("#numbRecords").val();
  var start_year = $("#startYear").val();
  var end_year = $("#endYear").val();

  if (start_year == "" && end_year != "") {
    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryUrl += '?' + $.param({
      'api-key': "9652878909cb4e5584a00be6cc2abfa9",
      'q': search_term,
      'end_date': end_year+"1231".toString(),
      'fl': numb_records,//"web_url,keywords,headline,pub_date,source",
      'facet_field': "main"
    });
  }
  else if (start_year != "" && end_year == "") {
    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryUrl += '?' + $.param({
      'api-key': "9652878909cb4e5584a00be6cc2abfa9",
      'q': search_term,
      'begin_date': (start_year+"1231").toString(),
      'fl': numb_records,//"web_url,keywords,headline,pub_date,source",
      'facet_field': "main"
    });
  }
  else {
    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryUrl += '?' + $.param({
      'api-key': "9652878909cb4e5584a00be6cc2abfa9",
      'q': search_term,
      'fl': numb_records,//"web_url,keywords,headline,pub_date,source",
      'facet_field': "main"
    });
  }

//http://api.nytimes.com/svc/archive/v1/2016/11.json?api-key={your-api-key}
  // var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  // queryUrl += '?' + $.param({
  //   'api-key': "9652878909cb4e5584a00be6cc2abfa9",
  //   'q': search_term,
  //   'begin_date': start_year+"0101",
  //   'end_date': end_year+"1231",
  //   'sort': "newest",
  //   'fl': numb_records,//"web_url,keywords,headline,pub_date,source",
  //   'facet_field': "main"
  // });
  // console.log("search_term: "+ search_term);
  $.ajax({
    url: queryUrl,
    method: 'GET',
  }).then(function(response) {
    console.log(response);
    console.log(queryUrl);

    var results  = response.response;
    console.log(response.response);
    //var i= 0; 
    var newSubDiv = $("<div>");
    var newUL = $("<ol>");
    for(i=0;i<results.docs.length;i++){
     
     // newSubDiv.text(results.docs[i].headline.main);
      
      var newLi = $("<li><h5 class='purple-text'>"+"<strong>"+results.docs[i].headline.main+"</strong></h5>"
                  +"<p>by: "+"<strong>"+results.docs[i].source+"</strong>"
                  +"<br />Published Date: "+results.docs[i].pub_date
                  +'<br /><a href="'+results.docs[i].web_url+'">'+results.docs[i].web_url+'</a>'+
                  +"</p>");
      //var newHeader = $("<h3>"+results.docs[i].headline.main+"</h3>");
      // var newLink = $("<a>");
      // newLink.attr("href", results.docs[i].web_url);
      // newLink.attr("target","_blank");
      // newLink.text(results.docs[i].web_url);
    //  newLi.text(results.docs[i].headline.main);
      //newLi.append(newLink);
      newUL.append(newLi);
    }

     // newLi.text(results.docs[i].headline.main);
     newSubDiv.append(newUL);
      $("#results-area").append(newSubDiv);   
    

  }).fail(function(err) {
    throw err;
  });


});
  