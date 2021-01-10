let pushKey = false;

AnsImage.onload=()=>
{
    ctx.drawImage(AnsImage,Answer.posX,Answer.posY);
}

document.addEventListener("keydown",drawAnscommands);
document.addEventListener("keyup",keyUphandler);

function drawAnscommands(event)
{
    switch(event.keyCode)
    {
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

function keyUphandler()
{
    pushKey = false;
}


function eraseAnscommands()
{

}
