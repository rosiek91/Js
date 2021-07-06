function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function getRandomNumbers() {
    const numbers = [];
    let random;

    for(let i = 0; i<6; i++) {
        random = getRandom(1, 49);
        while(numbers.includes(random)) {
            random = getRandom(1,49);
            console.log(`Powtórzyła się liczba: ${random}.`);
        }
    numbers.push(random);
}
return numbers; 
}

const numbers = getRandomNumbers(); 

console.log(`Wylosowane losowe liczby to: ${numbers.join(" ,")}`);