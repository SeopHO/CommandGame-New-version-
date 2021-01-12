let commands = [command_up,command_down,command_left,command_right];
let usercommands = [];

let randcommands = []; 

let randNum;
let randNumArr = [];

let wrong = false;
let corrent = false;

let dotcnt = 0;

let roundNum=0;
// let roundtype;

let commandsCount=null;
let roundText;

let ready=false;


function roundCheck(roundNum)
{
    if(roundNum <2)
    {
        commandsCount = round.tutorial;
        roundText = 'tutorial';

    }
    else if(roundNum < 5)
    {
        commandsCount = round.easy;
        roundText = 'easy';
    }
    else if(roundNum < 9)
    {
        commandsCount = round.normal;
        roundText = 'normal';
    }
    else if(roundNum < 16)
    {
        commandsCount = round.hard;
        roundText = 'hard';
    }
    else if(roundNum < 21)
    {
        commandsCount = round.hell;
        roundText = 'hell';
    }
    
    else if(roundNum < 31)
    {
        commandsCount = round.jjin_hell;
        roundText = 'jjin_hell';
    }
    else if(roundNum > 31)
    {
        commandsCount = round.jjinJJin_hell;
        roundText = 'jjinJJin_hell';
    }

}

function QuestionLen(commandsCount)
{
    return commandsCount;
}


function CreateRandomNum()
{
    for(let i=0;i<QuestionLen(commandsCount);i++)
    {
        randNum = Math.floor(Math.random() * 4);
        
        randNumArr.push(randNum);
        let temp = randNumArr[i];
        randcommands[i] = commands[temp];
    }
}

function comparecommands()
{
    for(let i=0;i<QuestionLen(commandsCount);i++)
    {
       if(randcommands[i] != usercommands[i])
       {
            wrong = true;
       }
    }

    let timer = setInterval(function()
    {
        dotImage.src= dotImageUrl[dotcnt];
        dotImage.onload=()=>{
            ctx.drawImage(dotImage, Question.posCmX, Question.posCmY);
        }
        dotcnt++;

        if(dotcnt === 3)
        {
            clearInterval(timer);
        }

    },1000);
    compareResult();
}

function compareResult()
{
    if(wrong === true)
    {
        console.log('WRONG');
        let timer = setTimeout(function()
        {
            ctx.clearRect(Question.posCmX,Question.posCmY,150,50);
            gunImage.src = Question.gunUrl;
            gunImage.onload=()=>
            {
                ctx.drawImage(gunImage,Question.posX-30, Question.posY+40);
            }
            AnsDieImage.src = Answer.dieUrl;
            ctx.clearRect(Answer.posX,Answer.posY,200,200);
            AnsDieImage.onload=()=>
            {
                ctx.drawImage(AnsDieImage,Answer.posX, Answer.posY+55);
            }
        },4500);
    }
    else
    {
        console.log('CORRECT');
        let timer = setTimeout(function()
        {
            ctx.clearRect(Question.posCmX,Question.posCmY,150,50);
            correctImage.src = Question.correctUrl;
            correctImage.onload=()=>
            {
                ctx.drawImage(correctImage,Question.posCmX, Question.posCmY);
            }
            clearTimeout(timer);
        },4500);

        let timer2 = setTimeout(function()
        {
            ctx.clearRect(Question.posCmX,Question.posCmY,200,50);
            reset();
            clearTimeout(timer2);
        },6000);

        roundNum++;
    }
}

function reset()
{
    ansEnd = false;
    queEnd=false;
    cnt=0;
    wrong = false;
    corrent = false;
    userCommandsCnt=0;
    dotcnt = 0;
    usercommands=[];
    randcommands=[];
    randNumArr = [];
    ready = false;
    queInit();
    init();
}

function init()
{
    roundCheck(roundNum);
    CreateRandomNum();
    console.log(randcommands);
}

init();