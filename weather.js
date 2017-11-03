// jQuery Weather!
// The provided icon() function takes a Dark Sky point object and
// converts it into an icon, e.g.
// icon(response.daily.data[1])

// Math.round(75.88) => 75

// .empty() empties the HTML contents of a jQuery DOM object

// .append() appends a string (containing HTML) to a jQuery DOM object

let handleWeatherResponse = function(response) {
  // leave these two lines alone; they allow for the inspection of
  // the response object in the browser console
  console.log(response)
  window.response = response

  // **** your code starts here - don't modify anything else. you will be sad.
  $("#current-conditions-icon").html(icon(response.currently));
  $("#current-conditions-text").html(Math.round(response.currently.temperature)+" "+response.currently.summary);

  $(".current").fadeIn(2000);

  $(".forecast").empty();
  let markup = "";

  for(i=0;i<6;i++) {

    markup += "<div class='col'>";
    markup += "<h3><i>" +icon(response.daily.data[i])+ "</i></h3>";
    markup += "<h4>"+Math.round(response.daily.data[i].temperatureHigh)+"|"+Math.round(response.daily.data[i].temperatureLow)+"</h4>";
    markup += "<h5>"+response.daily.data[i].summary+ "</h5>";
    markup += "</div>";

  }

  $(".forecast").append(markup);
  $(".forecast").fadeIn(2000);



  // *** your code ends here - no, really.
};

// leave this alone; does the event handling and ajax
$(function() {
  $("#get-the-weather").on("click", function(event) {
    event.preventDefault();
    let locationName = $("#location-name").val();
    geocodeAndGetWeather(locationName);
  });
});
