var randomArticleURL = 'https://en.wikipedia.org/w/api.php?action=query&format=json&titles=Stack%20Overflow';
var test1 = [];
$(document).ready(function(){



});

function getRandomArticle(url, success){
  $.getJSON(randomArticleURL, function(response){
    test1 = response.success;
  });
  alert(test1);
}
