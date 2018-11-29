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
var animals = ["Pig", "Cow", "Llama", "Donkey", "Monkey", "Cat", "Mouse", "T-Rex", "Puppy", "Bird", "Snake", "Sloth", "Bunny","Fish", "Wolf", "Squirrel"];

var buttonCreator = function() 
{
    $(".buttonGallery").empty();

    for (i = 0; i < animals.length; i++) 
    {
        var button = $("<button>");
        button.addClass("GalleryAdd");
        button.attr("data-name", animals[i]);
        button.text(animals[i]);
        $(".buttonGallery").append(button);

    }
};


buttonCreator();

$(".GalleryAdd").on("click", function(){

    $("#gif-Gallery").empty();
    var searchTermUpdate;
    var searchTerm = $(this).attr("data-name");

    SelectGIF(searchTerm);



});


$("#anotherButton").on("click", function(event) {

    event.preventDefault();
    // This line grabs the input from the textbox
    var onemorebutton = $("#user-input").val().trim();
    // Adding movie from the textbox to our array
    animals.push(onemorebutton);
    // Calling renderButtons which handles the processing of our movie array
    buttonCreator();

    $(".GalleryAdd").on("click", function(){

        $("#gif-Gallery").empty();
        var searchTermUpdate;
        var searchTerm = $(this).attr("data-name");
    
        SelectGIF(searchTerm);
    
    
    
    });
  });







  








  
 