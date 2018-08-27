
// put this in a function input into function should be the animals variable




var animals = ["Pig", "Cow", "Llama", "Donkey", "Monkey", "Dog", "Cat", "Mouse", "T-Rex", "Puppy", "Bird", "Snake", "Sloth", "Gopher","Iguana", "Lizard", "Buffalo"];
var gifcount = 0;
var gifLocation;
var clickCount = 0;

SelectGIF(animals[3]);

var buttonCreator = function() {
    $(".buttonGallery").empty();

    for (i = 0; i < animals.length; i++) {
        var button = $("<button>");
        button.attr("data-name", animals[i]);
        button.text(animals[i]);
        $(".buttonGallery").append(button);

    }};

buttonCreator();


var SelectGIF = function(animal) {

  var URLString = "https://api.giphy.com/v1/gifs/search?q=" + animal + "+funny&api_key=dc6zaTOxFJmzC&rating=pg";
$.get({
  url: URLString,
  success: function(result) {
    var data = result.data;
    var output = "";
    for (var index in data){
        var gifObject = data[index];
      var gifURL = gifObject.images.original.url;
      console.log(gifURL);
      output += "<img width='200px' src='"+gifURL+"'/>";
    }
    $("#gif-Gallery").html(output);
  },
  error: function(error) {
    console.log(error);
  }
});
}




  
    
   
