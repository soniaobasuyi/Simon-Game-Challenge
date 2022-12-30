
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

// Keep track of whether the game has started
var started = false;

// To start the game at level 0
var level = 0;

// Detect when a keyboard key has been pressed, call nextsequence() only when this happens for the first time,
$(document).on("keydown", function() {

    if (!started) {
    
    // to change the h1 to level 0.
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
}
});


$(".btn").on("click", function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);
});

function nextSequence() {

    // to increase the level by 1 everytime this function is called.
    level++;

    // update h1 with the change in the value of level.
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}


