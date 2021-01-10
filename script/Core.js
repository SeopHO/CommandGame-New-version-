let commands = [command_up,command_down,command_left,command_right];

let randcommands = []; 

let randNum;
let randNumArr = [];




function QuestionLen()
{
    let a=4;
     return a;
} 

function CreateRandomNum()
{
    for(let i=0;i<QuestionLen();i++)
    {
        randNum = Math.floor(Math.random() * 4);
        randNumArr.push(randNum);
        let temp = randNumArr[i];
        randcommands[i] = commands[temp];
    }
}

function init()
{
    CreateRandomNum();
    console.log(QuestionLen());
    
    console.log(randcommands);
    console.log(randcommands[1].text);
    
    
}
init();