var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];


$(".btn").on("click", function() {

    var userChosenColor = $(this).attr("id");
    userClickPattern.push(userChosenColor);

    playSound(userChosenColor);

    animatePress(userChosenColor);
    
});


function nextSquence() {

    var randomIndex = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomIndex];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

    animatePress(randomChosenColor);
    
}



function animatePress(currentColor) {

    let activeButton = $(this).attr(currentColor);

    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}

function playSound(buttonColor) {

    var currentButtonAudio = new Audio("sounds/" + buttonColor + ".mp3");
    currentButtonAudio.play();

}








