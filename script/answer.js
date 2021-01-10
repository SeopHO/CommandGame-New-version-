let pushKey = false;

AnsImage.onload=()=>
{
    ctx.drawImage(AnsImage,Answer.posX,Answer.posY);
}

document.addEventListener("keydown",drawAnscommands);
document.addEventListener("keyup",keyUphandler);

function drawAnscommands(event)
{
    // console.log('키 눌름');
    
    switch(event.keyCode)
    {
        case command_up.code:
            upImage.src= command_up.url;
            upImage.onload=()=>{
                ctx.drawImage(upImage, Answer.posCmX, Answer.posCmY);
            }
            break;
        case command_down.code:
            downImage.src= command_down.url;
            downImage.onload=()=>{
                ctx.drawImage(downImage, Answer.posCmX, Answer.posCmY);
            }
            break;
        case command_left.code:
            leftImage.src= command_left.url;
            leftImage.onload=()=>{
                ctx.drawImage(leftImage, Answer.posCmX, Answer.posCmY);
            }
            break;
        case command_right.code:
            rightImage.src= command_right.url;
            rightImage.onload=()=>{
                ctx.drawImage(rightImage, Answer.posCmX, Answer.posCmY);
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
