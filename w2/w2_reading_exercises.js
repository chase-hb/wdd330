// Chase Bush
// 01/14/2022
// WDD 330


//Javascript: Novice to ninja exercises

//chapter 2
// const question = "What is Superman's real name?";
// const answer = prompt(question);
// alert(`You answered "${answer}"`);


//chapter 3 + 4
const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];


function start(quiz){
    let score = 0;

    for(const [question,answer] of quiz){
        const response = ask(question);    
        check(response, answer)
    }

    gameOver();

    function ask(question){
        return prompt(question);
    }

    function check(response, answer){
        if(response == answer){
            alert("Correct!");
            score++;
        } else{
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}

start(quiz);