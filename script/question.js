let cnt = 0;

QueImage.onload=()=>
{
    ctx.drawImage(QueImage,Question.posX,Question.posY);
}

function drawQuecommands(rec)
{
    console.log('그린다');
    console.log(rec);
    
    switch(rec)
    {
        case 'up':
            upImage.onload = () => 
            {
                ctx.drawImage(upImage, Question.posCmX, Question.posCmY);
            }
            break;
        case 'down':
            downImage.onload = () => 
            {
                ctx.drawImage(downImage, Question.posCmX, Question.posCmY);
            }
            break;
        case 'left':
            leftImage.onload = () => 
            {
                ctx.drawImage(leftImage, Question.posCmX, Question.posCmY);
            }
            break;
        case 'right':
            rightImage.onload = () => 
            {
                ctx.drawImage(rightImage, Question.posCmX, Question.posCmY);
            }
            break;
    }
}


function checkQuecommands()
{
    let timer=setInterval(function()
    {    
        let rec = randcommands[cnt].text;
        drawQuecommands(rec);
        cnt++;

        if(cnt === QuestionLen())
        {
            clearInterval(timer);
        }

    },1000);
}


function test()
{
    console.log(true);
    checkQuecommands();
}
test();


