const names = ["Guadalupe", "Ollie", "Aki"];
let cards = [];

function writeCards(){
    for (let i = 0; i < names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    
    }
    return cards;
}
console.log(writeCards[cards]);

function countDown(){
    let num = 10 
    while (num >= 0) {
        console.log(num--);
    }
    return num;
}
countDown(10);


