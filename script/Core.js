const commands = [command_up,command_down,command_left,command_right];
let usercommands = [];
let randcommands = []; 

let randNum;
let randNumArr = [];

let dotcnt = 0; //question's thinking animation.

function roundCheck(value)
{
    // console.log(round.num);

    switch (round.num) {
        case 0:
        case 1:
            round.commandsCount = round.tutorial;
            round.text = 'tutorial';
            break;
        case 2:
        case 3:
        case 4:
            round.commandsCount = round.easy;
            round.text = 'easy';
            break; 
        case 5:
        case 6:
        case 7:
        case 8:
            round.commandsCount = round.normal;
            round.text = 'normal';
            break;
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
            round.commandsCount = round.hard;
            round.text = 'hard';
            break;
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
            round.commandsCount = round.hell;
            round.text = 'hell';
            break;
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
            round.commandsCount = round.jjin_hell;
            round.text = 'jjin_hell';
            break;
        default:
            round.commandsCount = round.jjinJJin_hell;
            round.text = 'jjinJJin_hell';
            break;
    }

}

function QuestionLen(value)
{
    return round.commandsCount;
}


function CreateRandomNum()
{
    for(let i=0;i<QuestionLen(round.commandsCount);i++)
    {
        randNum = Math.floor(Math.random() * 4);
        
        randNumArr.push(randNum);
        let temp = randNumArr[i];
        randcommands[i] = commands[temp];
    }
}

function comparecommands()
{
    for(let i=0;i<QuestionLen(round.commandsCount);i++)
    {
       if(randcommands[i] != usercommands[i])
       {
            game.wrong = true;
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
    if(game.wrong === true)
    {
        console.log('Wrong');
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

        round.num++;
    }
}

function saveRound()
{

}


function reset()
{
    Answer.ansEnd = false;
    Question.queEnd=false;
    q_cnt=0;
    game.wrong = false;
    game.corrent = false;
    a_cnt=0;
    dotcnt = 0;
    usercommands=[];
    randcommands=[];
    randNumArr = [];
    // ready = false;
    queInit();
    init();
    roundImageCheck();
}

function init()
{
    roundCheck(round.num);
    CreateRandomNum();
    // console.log(randcommands);
}

init();