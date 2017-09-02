var randomArticleURL = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=cow&origin=*';
//https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=cow&origin=*';
$(document).ready(function(){
  var searchResult = [];
  var test2 = "";
  var test3 = "";

  $("#randomArticle").click(function(){
    $("#wikiArticle").html("");
    var html = "";
    pages = [];

    $.getJSON(randomArticleURL, function(response){
      searchResult = response;

      test2 = searchResult.query.search[0].title;
      test3 = searchResult.query.search[0].snippet;


      $("#wikiArticle").append("<div><h3>" + test2 + "</h3>" + " " + test3);
      alert(test2);
    });
  });

});
