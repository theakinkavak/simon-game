let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = []; 
let userClickPattern = []; 
let started = false;
let level = 0;


$(document).on("keydown", function() {
    if (!started) {

        $("#level-title").text("Level " + level);
        nextSquence();
        started = true;
    }
})

$(".btn").on("click", function() {

    let userChosenColor = $(this).attr("id");
    userClickPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickPattern.length-1);
    
})


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
        console.log("Success");

        if (userClickPattern.length === gamePattern.length) {

            setTimeout(() => {
                nextSquence();
            }, 1000);
        }

    } else {

        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over")
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
        
    }
}


function nextSquence() {

    userClickPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    let randomIndex = Math.floor(Math.random() * 4); 
    let randomChosenColor = buttonColors[randomIndex];
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

    let currentButtonAudio = new Audio("sounds/" + buttonColor + ".mp3");
    currentButtonAudio.play();

}

function startOver() {

    started = false;
    level = 0;
    gamePattern = [];

}




