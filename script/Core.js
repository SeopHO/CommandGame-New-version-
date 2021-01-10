let commands = [command_up,command_down,command_left,command_right];
let usercommands = [];

let randcommands = []; 

let randNum;
let randNumArr = [];

let wrong = false;
let corrent = false;

let dotcnt = 0;

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

function comparecommands()
{
    let timer = setInterval(function()
    {
        dotImage.src= dotImageUrl[dotcnt];
        dotImage.onload=()=>{
            ctx.drawImage(dotImage, Question.posCmX, Question.posCmY);
        }
        dotcnt++;

        if(dotcnt > 3)
        {
            for(let i=0;i<QuestionLen();i++)
            {
               if(randcommands[i] != usercommands[i])
               {
                    wrong = true;
               }
            }
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

        },1000);
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
    }
}

function init()
{
    CreateRandomNum();
    // console.log(QuestionLen());
    console.log(randcommands);
}
init();