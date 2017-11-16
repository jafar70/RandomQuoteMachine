$(document).ready(function(){
  function getQuote(){
    $.getJSON('https://talaikis.com/api/quotes/random/', function(x) {
    $('#quote').text(x.quote);
    $('#authorName').text(x.author);
  });
  }
  
  $('.link').click(function(){
    getQuote();
  });
  
  getQuote();
  
  
});