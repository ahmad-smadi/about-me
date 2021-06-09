# about-me
each us more about you! Build out an “About Me” webpage that quizzes the user on fun facts gives the user some basic information about who you are and where you came from. We will build onto this project over the next few labs. Be prepared to refactor your code each day and learn about how a web site incrementally goes from an idea to a deployed site through various iterations of development.


ahmad smadi was Navigator on this projict 
 mohammed selwadi was Driver on this projict 

 # this is the code ahmad and mohammed worked on 
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