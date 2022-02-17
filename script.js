const welkom = prompt("Welcome! What is your name?");

//functies 
const getRandomNumberBetween = function (min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
//
if (welkom != null) {
    alert("Hey " + welkom );
}

const guess = prompt("Enter a number between 0 and 25 to start guessing...")
if (guess === getRandomNumberBetween(0, 25)){
    const correct = alert("Congratulations, you have won the game!");
}
else {
    const helaas = prompt("Helaas probeer opnieuw, je hebt nog 4 kansen over");
    if (guess === getRandomNumberBetween(0, 25)){
        const correct = alert("Congratulations, you have won the game!");
    }
    else {
        const helaas = prompt("Helaas probeer opnieuw, je hebt nog 3 kansen over");
        if (guess === getRandomNumberBetween(0, 25)){
            const correct = alert("Congratulations, you have won the game!");
        }
        else {
            const helaas = prompt("Helaas probeer opnieuw, je hebt nog 2 kansen over");
            if (guess === getRandomNumberBetween(0, 25)){
                const correct = alert("Congratulations, you have won the game!");
            }
            else {
                const helaas = prompt("Helaas probeer opnieuw, je hebt nog 1 kans over");
                if (guess === getRandomNumberBetween(0, 25)){
                    const correct = alert("Congratulations, you have won the game!");
                }
                else verloren = alert("Helaas, je hebt verlopen!")
            }

                
    }
}
}
const bye = alert("Bye" + welkom);



// te doen!
// nummer berekenen tussen 0 en 25
// 
// 
// 
// const incorrect = alert("Enter a number between 0 and 25 to start guessing...");
// const correct = alert("Congratulations, you have won the game!");
// const bye = alert("Bye " + welkom);