let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let Que = new Image();
let Ans = new Image();

Que.src= "./image/Question.png";
Ans.src = "./image/Answer.png";

Que.onload=()=>
{
    ctx.drawImage(Que,200,5,70,50*Que.height/Que.width);
}

Ans.onload=()=>
{
    ctx.drawImage(Ans,100,5,70,50*Ans.height/Ans.width);
}

