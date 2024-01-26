function numbguess() {
    var randomnumber = Math.floor(Math.random() * 10) 
    var userguess = document.getElementById("guessinp")

    if (userguess< 1 || userguess > 10) {
        alert("Can you please add a number between 1 and 10.")
    } 
    else {
        if (userguess === randomnumber) {
       alert("Goooooood! You guessed the correct number")
     } 
        else {
        alert(`False. The correct number is" ${randomnumber}". you can try again`)
        }
    }
}
function charguess() {
    var userguesschar = document.getElementById("guesscharinp")
    var questElement = document.getElementById("quest")
    var array = [
        {"He had a very long nose": "pinocchio"},{"He steals from the rich to give to the poor": "robin hood"},{"He is the world champion of chess": "magnus carlsen"}
    ]
    var randomkey = Math.floor(Math.random()* array.length)

    var randomindice =array[randomkey]
    var indic = Object.keys(randomindice)[0]
    var correct = randomindice[indic]


    questElement.textContent = indic
    if (userguesschar === correct) {

        alert("Congratulations! You guessed the correct character.")
    } else {alert("Oops! Wrong guess. Try again.")}
}
function colorguess() {
    var arr = [
        {"#FF0000": "red"},{"#0000FF": "blue"},{"#000000": "black"}
    ]
var userguesscol= document.getElementById("guesscolorinp")
var color=document.getElementById("color")

    
}



