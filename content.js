$(document).ready(function(){
  $('li > a').on('click', function(){
    $('.dates').empty();
    $('.text').empty();
    $('.high').empty();
    $('.low').empty();
    var city = $(this).html();
    var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+city+"%2C%20ca%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
    console.log(url);
    $.ajax({
      method: 'GET',
      url: url,
      success: function(json) {
      console.log(JSON.stringify(json.query.results.channel.item.forecast));
      var forecast = JSON.parse(JSON.stringify(json.query.results.channel.item.forecast));  
      var descriptionText = JSON.stringify(json.query.results.channel.item.condition.text);
      var dateNtime = JSON.stringify(json.query.results.channel.item.pubDate);
//      var forcast =(JSON.parse(JSON.stringify(json.query.results.channel.item)));
      $('.cityName').html(city);
      $('.date').html(dateNtime);
      for (i in forecast) {
        $('.dates').append(forecast[i].date + "<br><br>");
        $('.text').append(forecast[i].text + "<br><br>");
        $('.high').append("high: " +forecast[i].high + "<br><br>");
        $('.low').append("low: " +forecast[i].low + "<br><br>");
      }

        }
    });
  });
  
  
  

})