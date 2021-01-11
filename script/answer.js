let ansEnd = false;

let pushKey;

let userCommandsCnt=0;

AnsImage.onload=()=>
{
    ctx.drawImage(AnsImage,Answer.posX,Answer.posY);
}

document.addEventListener("keydown",drawAnscommands);
document.addEventListener("keyup",keyUphandler);

function drawAnscommands(event)
{
    if(queEnd === true && pushKey === false && ansEnd === false)
    {
        pushKey = true;
        switch(event.keyCode)
        {
            case command_up.code:
                upImage.src= command_up.url;
                eraseAnscommands();
                upImage.onload=()=>{
                    ctx.drawImage(upImage, Answer.posCmX, Answer.posCmY);
                }
                pushUsercommands(command_up);
                break;
            case command_down.code:
                downImage.src= command_down.url;
                eraseAnscommands();
                downImage.onload=()=>{
                    ctx.drawImage(downImage, Answer.posCmX, Answer.posCmY);
                }
                pushUsercommands(command_down);
                break;
            case command_left.code:
                leftImage.src= command_left.url;
                eraseAnscommands();
                leftImage.onload=()=>{
                    ctx.drawImage(leftImage, Answer.posCmX, Answer.posCmY);
                }
                pushUsercommands(command_left);
                break;
            case command_right.code:
                rightImage.src= command_right.url;
                eraseAnscommands();
                rightImage.onload=()=>{
                    ctx.drawImage(rightImage, Answer.posCmX, Answer.posCmY);
                }
                pushUsercommands(command_right);
                break;
            default:
                XImage.src = command_X.url;
                eraseAnscommands();
                XImage.onload=()=>{
                    ctx.drawImage(XImage, Answer.posCmX, Answer.posCmY);
                }
                pushUsercommands(command_X);
                break;
        }
    }
    else if(queEnd === false)
    {
        console.log('아직 니 차례 아님.');
    }
}

function keyUphandler()
{
    pushKey = false;
}

function pushUsercommands(commandValue)
{
    usercommands.push(commandValue);
    userCommandsCnt++;

    if(userCommandsCnt === QuestionLen())
    {
        ansEnd = true;
        eraseAnscommands();
        console.log(usercommands);
        console.log('Answer End');
    }
}

function eraseAnscommands()
{
    if(ansEnd === true)
    {
        let timer=setTimeout(function()
        {
            ctx.clearRect(Answer.posCmX,Answer.posCmY,150,50);
            clearTimeout(timer);
        },2000);
        comparecommands();
    }
    else
    {
        ctx.clearRect(Answer.posCmX,Answer.posCmY,150,50);
    }
}