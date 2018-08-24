// a game with 4 crystals and random result
// every crystal needs random number btwn 1-12
// new random number generated each time a crystal is clocked til it equals total score
// if its not equal, lose and increment a loss
// if it is equal, increment win

//create object for crystals with name and value set to 0
var crystal = {
    blue:
    {
        name: "blue",
        value: 0
    },
    green:
    {
        name: "green",
        value: 0
    },
    gold:
    {
        name: "gold",
        value: 0
    },
    pink:
    {
        name: "pink",
        value: 0
    }
}

//set variables for scores and counters
var current = 0;
var target = 0;
var wins = 0;
var losses = 0; 

//function to assist in getting random values for each crystal as well as target
var randomValue = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function to start game
var beginGame = function() {
    //sets user score to start at 0
    current = 0;
    //set random value for target score
    target = randomValue(19, 120);

    //sets random values for each crystal
    crystal.blue.value = randomValue(1, 12);
    crystal.green.value = randomValue(1, 12);
    crystal.gold.value = randomValue(1, 12);
    crystal.pink.value = randomValue(1, 12);

    //jquery to change html when scores change
    $("#yourScore").html(current);
    $("#targetScore").html(target);

    console.log("Target Score:" + target);
    console.log("Blue: " + crystal.blue.value);
    console.log("Green: " + crystal.green.value);
    console.log("Gold: " + crystal.gold.value);
    console.log("Pink: " + crystal.pink.value);
}
    //updates score 
var addValues = function(crystal){
    current = current + crystal.value;

    //runs function to check for win
    checkWin();

    $("#yourScore").html(current);
    console.log("Your Score: " + current)

}
    //function to restart the game if win or loss, increments value to win and loss counters
var checkWin = function() {

    if(current > target) {
        alert("Sorry, you lose.");
        console.log("You lose.");
        losses++;
        $("#lossCounter").html(losses);
        beginGame();
    }
    else if(current == target) {
        alert("Congrats, you win!!!");
        console.log("You WIN!");
        wins++;
        $("#winCounter").html(wins);
        beginGame();
    }
}

//game start
beginGame();
//jquery functions to add values to html score when each is clicked
$("#blue").click(function() {
    addValues(crystal.blue);
});
$("#green").click(function() {
    addValues(crystal.green);
});
$("#gold").click(function() {
    addValues(crystal.gold);
});
$("#pink").click(function() {
    addValues(crystal.pink);
});


// var randomResult;
// var loss = 0;
// var win = 0;
// var previousNum = 0;

// var resetAndStart = function() {
//  ["assets/images/blue-crystal.jpg", "green-crystal.jpg", "yellow-crystal.jpg", "pink-crystal.jpg"]

//     $(".crystals").empty();
//     //generates random number between 19-120
//     randomResult = Math.floor(Math.random() * 100) + 19;
//     console.log(randomResult)

//     //displays the random result
//     $("#result").html('Result: ' + randomResult);

//     //creates a for loop, gives 4 crystals random numbers between 1-12
//     for(var i = 0; i < 4; i++){
//         var random = Math.floor(Math.random() * 12) + 1;
//         console.log(random);

//         //uses jquery to add a div on each loop
//         var crystal = $("<div>");
//         //sets values- style, shows random number on each crystal
//         crystal.attr({
//             "class": 'crystal',
//             "showRandom": random
//         });
        
//         crystal.html(random);
        
//         $(".crystals").append(crystal);
//     }
// }
//     $("#previousNum").html("Total Score: ", + previousNum);

// resetAndStart();

// //using jquery, this generates the random number upon clicking the crystal div
// $(document).on('click', ".crystal", function() {
 

//     //converts string to number
//     var newNum = parseInt($(this).attr('showRandom'));
//     //adds previous number to new number
//     previousNum += newNum;
//     $("#previousNum").html(previousNum);
//     if(previousNum > randomResult){
//         loss--;
//         $("#loss").html("Losses: ", + loss);
//         console.log("You lose!")        
//         previousNum = 0;
        
//         resetAndStart();
//     }

//     else if(previousNum === randomResult){
//         win++;
//         $("#win").html("Wins: ", + win);
//         console.log("You win!")
//         previousNum = 0;
        
//         resetAndStart();
//     }
// });