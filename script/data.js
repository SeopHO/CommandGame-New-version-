const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const Question={
    url:"./image/Question.png",
    posX:750,
    posY:canvas.height/2,
    posCmX:650,
    posCmY:(canvas.height/2)-50,
};

const Answer={
    url:"./image/Answer.png",
    posX:150,
    posY:canvas.height/2,
    posCmX:130,
    posCmY:(canvas.height/2)-50,
}

const command_up={
    text:'up',
    code:38,
    url:"./image/up.png",
}
const command_down={
    text:'down',
    code:40,
    url:"./image/down.png",
}
const command_right={
    text:'right',
    code:39,
    url:"./image/right.png",
}
const command_left={
    text:'left',
    code:37,
    url:"./image/left.png",
}


let QueImage = new Image();
let AnsImage = new Image();

let upImage = new Image();
let downImage = new Image();
let leftImage = new Image();
let rightImage = new Image();

let Q_B_Image = new Image();
let A_B_Image = new Image();

QueImage.src= Question.url;
AnsImage.src = Answer.url;



