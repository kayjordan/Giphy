
// put this in a function input into function should be the animals variable

var animals = ["Pig", "Cow", "Llama", "Donkey", "Monkey", "Dog", "Cat", "Mouse", "T-Rex", "Puppy", "Bird", "Snake", "Sloth", "Gopher","Iguana", "Lizard", "Buffalo"];
var gifcount = 0;
var gifLocation;
var clickCount = 0;

SelectGIF(animals[3]);



var buttonCreator = function() {

    for (i = 0; i < animals.length; i++) {
        var button = $("<button>");
        button.attr("data-name", animals[i]);
        button.text(animals[i]);
        $(".buttonGallery").append(button);

    }};

buttonCreator();




///// creates another button

$("#anotherButton").on("click", function() {

  event.preventDefault();
  // This line grabs the input from the textbox
  var onemorebutton = $("#user-input").val().trim();
  // Adding movie from the textbox to our array
  animals.push(onemorebutton);
  // Calling renderButtons which handles the processing of our movie array
  buttonFactory();
});




  
    
   
