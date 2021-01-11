roundImage.src = round.url;

roundImage.onload=()=>
{
    ctx.drawImage(roundImage,round.posX, round.posY+40);
}

roundTypeImage.src = roundTypeUrl[0];

roundTypeImage.onload=()=>
{
    ctx.drawImage(roundTypeImage,round.posX-10, round.posY+90);
}