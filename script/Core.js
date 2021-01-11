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


function QuestionLen()
{
    return 4;
}

function roundCheck(roundNum)
{
    let Count;
    switch(roundNum)
    {
        case 0,1:
            Count=4;
            QuestionLen(Count);
            break;
        case 2,3,4:
            QuestionLen(roundNum);
            break;
    }
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

function comparecommands()
{
    for(let i=0;i<QuestionLen();i++)
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
    queInit();
    init();
}

function init()
{
    roundCheck(roundNum);

    CreateRandomNum();
    // console.log(QuestionLen());
    console.log(randcommands);
    
}
init();