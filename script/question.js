let cnt = 0;

let queEnd = false;

QueImage.src= Question.url;
QueImage.onload=()=>
{
    ctx.drawImage(QueImage,Question.posX,Question.posY);
}

function checkQuecommands()
{
    let timer1=setInterval(function()
    {    
        let rec = randcommands[cnt].text;
        drawQuecommands(rec);
        let timer2 = setTimeout(function()
        {
            eraseQuecommands();
            clearTimeout(timer2);
        },1000);
        cnt++;

        if(cnt === QuestionLen())
        {
            clearInterval(timer1);

            let timer3 = setTimeout(function()
            {
                queEnd = true;
                queEndImage.src = Question.EndUrl;
                drawEndQue();
                let timer4 = setTimeout(function()
                {
                    eraseEndQue();
                    clearTimeout(timer4)
                },1000);
                clearTimeout(timer3);
            },2000);
        }
    },2000);
}

function drawQuecommands(rec) 
{
    console.log(rec);

    switch (rec) {
        case command_up.text:
            upImage.src= command_up.url;
            upImage.onload=()=>{
                ctx.drawImage(upImage, Question.posCmX, Question.posCmY);
            }
            break;
        case command_down.text:
            downImage.src= command_down.url;
            downImage.onload=()=>{
                ctx.drawImage(downImage, Question.posCmX, Question.posCmY);
            }
            break;
        case command_left.text:
            leftImage.src= command_left.url;
            leftImage.onload=()=>{
                ctx.drawImage(leftImage, Question.posCmX, Question.posCmY);
            }
            break;
        case command_right.text:
            rightImage.src= command_right.url;
            rightImage.onload=()=>{
                ctx.drawImage(rightImage, Question.posCmX, Question.posCmY);
            }
            break;
            
        default:
            break;
    }
}

function eraseQuecommands()
{
    ctx.clearRect(Question.posCmX,Question.posCmY,150,50);
}

function drawEndQue() 
{
    ctx.drawImage(queEndImage, Question.posCmX - 50, Question.posCmY);
}

function eraseEndQue()
{
    ctx.clearRect(Question.posCmX-50,Question.posCmY,200,50);
}

function queInit()
{
    checkQuecommands();
}



