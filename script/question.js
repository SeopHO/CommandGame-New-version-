let cnt = 0;

QueImage.onload=()=>
{
    ctx.drawImage(QueImage,Question.posX,Question.posY);
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

function drawQuecommands(rec) 
{
    console.log('그린다');
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

function test()
{
    console.log(true);
    checkQuecommands();
}
test();


