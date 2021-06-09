'use strict'
// let correctAnswer = 0;
// let userName = prompt('waht is your name');
// //console.log(userName);
// alert(`hello ${userName}, to my own webpage `);


// let like = prompt('do you think i like coding ?').toLowerCase();
// if (like === 'yes' || like === 'y') {
//     console.log('correct');
//     alert('you are correct')
// }
// else if (like === 'no' || like === 'n') {
       
//     alert('uncorrect')
// } else {
//     alert('please chose between yes or y or no or n');
// }
// correctAnswer++;

// let cat = prompt('do you think i like cat ?').toLowerCase();
// if (cat === 'yes' || cat === 'y') {
    
//     alert('uncorrect')
// } else if (cat === 'no' || cat === 'n'){
//     console.log('you are not correct');
// alert('correct')
// } else {
//     alert('please chose between yes or y or no or n')
// }
// correctAnswer++;


// let car = prompt('do you think i like car ?').toLowerCase();
// if (car === 'yes' || car === 'y') {
//     console.log(' correct')
//     alert(' correct')
// } else if (car === 'no' || car === 'n') {
//     alert('uncorrect')
// } else {
//     alert('please chose between yes or y or no or n')
// }
// correctAnswer++;

// let coffe = prompt('do you think i like coffe ?').toLowerCase();
// if (coffe === 'yes' || coffe === 'y') {
//     console.log('correct');
//     alert('correct')
// } else if (coffe === 'no' || coffe === 'n') {
//     alert('uncorrect');
// } else {
//     alert('please chose between yes or y or no or n')
// }
// correctAnswer++;


// let mansaf = prompt('do you think i like mansaf ?').toLowerCase();
// if (mansaf === 'yes' || mansaf === 'y') {
//     console.log('correct')
//     alert('correct')
// } else if (mansaf === 'no' || mansaf === 'n') {
//     alert('uncorrect');
// } else {
//     alert('please chose between yes or y or no or n');
// }
// correctAnswer++;
//  let lucky=0 ;
//  for(let i=0;i<4;i++){
//     lucky=prompt('guess my lucky number');
//     lucky=parseInt(lucky);
//  if (lucky ===3) {
//     console.log('correct');
//     alert('correct');
//     break;
//  } else if ( lucky>3 ) {
//      alert('too high');
// } else 
//      alert('too low');
// }

// correctAnswer++;

// let student = prompt('do you think im a student ?').toLowerCase();
// if (student === 'yes' || student === 'y') {
//     console.log(' correct');
//     alert(' correct');
// } else if (student === 'no' || student === 'n') {
//     alert(' uncorrect');
// } else {
//     alert('please chose between yes or y or no or n');
// }
// correctAnswer++;

// alert (`your scored ${correctAnswer} out of 7`);

// alert('i have a game for you chose number between 0 and 10 but your guess inside the box down');
// // random value generated
// let y = Math.floor(Math.random() * 10 + 1);
      
// // counting the number of guesses
// // made for correct Guess
// let guess = 1;
  
// document.getElementById("submitguess").onclick = function(){
  
// // number guessed by user     
// let x = document.getElementById("guessField").value;

// if(x == y)
// {    
//    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
//            + guess + " GUESS ");
// }
// else if(x > y) /* if guessed number is greater
//                than actual number*/ 
// {    
//    guess++;
//    alert("OOPS SORRY!! TRY LOW NUMBER");
// }
// else
// {
//    guess++;
//    alert("OOPS SORRY!! TRY HIGH NUMBER")
// }
// }
function piar(qustion,goodJob ,tryAgin) {
    let userInput;
    do {
        userInput = prompt(qustion)
    }while(userInput !=='yes'&&userInput!=='y'&& userInput!=='no'&& userInput!=='n');
    if (userInput==='yes'||userInput==='y'){
    console.log(goodJob)
    correctAnswer++
} else{
    console.log(tryAgin)}
    }
    piar('do you think i like coding ?','you are right','wrong')
    piar('do you think i like cat ?','you are right','wrong')
    piar('do you think i like car ?','you are right','wrong')
    piar('do you think i like coffe ?','you are right','wrong')
    piar('do you think i like mansaf ?','you are right','wrong')
    function qustion6(answer,right,wrong){
        let userInput;
        do{
            userInput=prompt(answer)

        }
        while(userInput !=='yes'&&userInput!=='y'&& userInput!=='no'&& userInput!=='n');
        if (userInput==='yes'||userInput==='y'){
            console.log(right)
        } else{
            console.log(wrong)}
            }
    qustion6('do you think my lucky number is  3 ','correct','uncorrect')

    function qustion7(answer,right,wrong){
        let userInput;
        do{
            userInput=prompt(answer)

        }
        while(userInput !=='yes'&&userInput!=='y'&& userInput!=='no'&& userInput!=='n');
        if (userInput==='yes'||userInput==='y'){
            console.log(right)
            correctAnswer++
        } else{
            console.log(wrong)}
            }
    qustion7('do you think im a student ?','correct','uncorrect')
