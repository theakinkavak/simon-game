var gamePattern = [];
var buttonColors = ["green", "red", "yellow", "blue"];


function nextSquence() {

    var randomIndex = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[randomIndex];

}




$(document).keydown(function(event) {

    if (event.key === "a") {
        $("h1").text("Level 1");

        let randomButtonColor = buttonColorArray[randomColorIndex];

        setTimeout(() => {
            makeSound(randomButtonColor);
            makeAnimation(randomButtonColor);
        }, 1000);

    };
    
    $(".btn").on("click", function() {
        let currentButtonColor = $(this).attr("id");

        makeSound(currentButtonColor);
        makeAnimation(currentButtonColor);


        if (randomButtonColor === currentButtonColor) {

            $("h1").text("Game Over!");
        }
        
    })
    
    
    
});



function makeAnimation(activeButtonID) {

    let activeButton = $(this).attr(activeButtonID);

    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}

function makeSound(buttonColorID) {

    var currentButton = new Audio("sounds/" + buttonColorID + ".mp3");
    currentButton.play();

}
