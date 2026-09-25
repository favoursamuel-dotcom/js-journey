function Guess() {
    let rand = Math.floor(Math.random() * 100) + 1;
    let attempt = 0;
    let num = 0;

    while (num !== rand && attempt <= 7) {
        num = Number(prompt(`Guess the number from 1 to 100: `));
        attempt++;

        if (num < rand) {
            alert("Too low !");
        } else if (num > rand) {
            alert("Too high!");
        }
    }

    if (num === rand) {
        alert("You got it right!! ");
    } else {
        alert(`Try again next time. The correct number was ${rand}.`);
    }
}

console.log(Guess());
