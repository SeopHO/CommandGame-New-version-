let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

QueImage.onload=()=>
{
    ctx.drawImage(QueImage,Question.posX,Question.posY);
}

AnsImage.onload=()=>
{
    ctx.drawImage(AnsImage,Answer.posX,Answer.posY);
}

upImage.onload=()=>
{
    console.log(true);
    
    ctx.drawImage(upImage,Question.posCmX,Question.posCmY);
}


