roundImage.src = round.url;

roundImage.onload=()=>
{
    ctx.drawImage(roundImage,round.posX, round.posY+40);
}

function eraseRoundType()
{
    ctx.clearRect(round.posX-10, round.posY+90,200,70);
}

function roundImageCheck()
{
    switch (round.text) {
        case 'tutorial':
            eraseRoundType();
            roundTypeImage.src = roundTypeUrl[0];
            roundTypeImage.onload = () => {
                ctx.drawImage(roundTypeImage, round.posX - 10, round.posY + 90);
            }
            break;
        case 'easy':
            eraseRoundType();
            roundTypeImage.src = roundTypeUrl[1];
            roundTypeImage.onload = () => {
                ctx.drawImage(roundTypeImage, round.posX - 10, round.posY + 90);
            }
            break;
        case 'normal':
            eraseRoundType();
            roundTypeImage.src = roundTypeUrl[2];
            roundTypeImage.onload = () => {
                ctx.drawImage(roundTypeImage, round.posX - 10, round.posY + 90);
            }
            break;
        case 'hard':
            eraseRoundType();
            roundTypeImage.src = roundTypeUrl[3];
            roundTypeImage.onload = () => {
                ctx.drawImage(roundTypeImage, round.posX - 10, round.posY + 90);
            }
            break;
        case 'hell':
            eraseRoundType();
            roundTypeImage.src = roundTypeUrl[4];
            roundTypeImage.onload = () => {
                ctx.drawImage(roundTypeImage, round.posX - 10, round.posY + 90);
            }
            break;
        case 'jjin_hell':
            eraseRoundType();
            roundTypeImage.src = roundTypeUrl[5];
            roundTypeImage.onload = () => {
                ctx.drawImage(roundTypeImage, round.posX - 10, round.posY + 90);
            }
            break;
        case 'jjinJJin_hell':
            eraseRoundType();
            roundTypeImage.src = roundTypeUrl[6];
            roundTypeImage.onload = () => {
                ctx.drawImage(roundTypeImage, round.posX - 10, round.posY + 90);
            }
            break;
    }
}
