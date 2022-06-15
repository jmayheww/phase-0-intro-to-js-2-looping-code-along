// // Code your solutions in this file
// for(let age = 30; age < 40; age++) {

//     console.log(`I'm ${age} years old. Happy Birthday to me!`);
//     debugger;
// }

// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts(gifts) {
//     for(let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);

//     }

//     return gifts;
// }

// wrapGifts(gifts);

function writeCards(array, eventName) {

    const messages = [];

    for(let i = 0; i < array.length; i++) {

        const message = `Thank you, ${array[i]}, for the wonderful ${eventName} gift!`;


        messages.push(message);



    }

    return messages;



}

console.log(writeCards(['Guadalupe', 'Ollie', 'Aki'], 'surprise'));


function countDown() {
    let num = 10;
   while (num >= 0) {
    console.log(num--);
   }



}

countDown();

