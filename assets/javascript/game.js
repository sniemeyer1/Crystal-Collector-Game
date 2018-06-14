// a game with 4 crystals and random result
// every crystal needs random number btwn 1-12
// new random number generated each time a crystal is clocked til it equals total score
// if its not equal, lose and increment a loss
// if it is equal, increment win

var randomResult;
var loss = 0;
var win = 0;
var previousNum = 0;

var resetAndStart = function() {
 ["assets/images/blue-crystal.jpg", "green-crystal.jpg", "yellow-crystal.jpg", "pink-crystal.jpg"]

    $(".crystals").empty();
    //generates random number between 19-120
    randomResult = Math.floor(Math.random() * 100) + 19;
    console.log(randomResult)

    //displays the random result
    $("#result").html('Result: ' + randomResult);

    //creates a for loop, gives 4 crystals random numbers between 1-12
    for(var i = 0; i < 4; i++){
        var random = Math.floor(Math.random() * 12) + 1;
        console.log(random);

        //uses jquery to add a div on each loop
        var crystal = $("<div>");
        //sets values- style, shows random number on each crystal
        crystal.attr({
            "class": 'crystal',
            "showRandom": random
        });
        
        crystal.html(random);
        
        $(".crystals").append(crystal);
    }
}
    $("#previousNum").html("Total Score: ", + previousNum);

resetAndStart();

//using jquery, this generates the random number upon clicking the crystal div
$(document).on('click', ".crystal", function() {
 

    //converts string to number
    var newNum = parseInt($(this).attr('showRandom'));
    //adds previous number to new number
    previousNum += newNum;
    $("#previousNum").html(previousNum);
    if(previousNum > randomResult){
        loss--;
        $("#loss").html("Losses: ", + loss);
        console.log("You lose!")        
        previousNum = 0;
        
        resetAndStart();
    }

    else if(previousNum === randomResult){
        win++;
        $("#win").html("Wins: ", + win);
        console.log("You win!")
        previousNum = 0;
        
        resetAndStart();
    }
});