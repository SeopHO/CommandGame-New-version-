const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const Question={
    url:"./image/Question.png",
    EndUrl: "./image/your-turn.png",
    correctUrl: "./image/correct.png",
    gunUrl: "./image/gun1.png",
    posX:750,
    posY:canvas.height/2,
    posCmX:650,
    posCmY:(canvas.height/2)-50,
}

const Answer={
    url:"./image/Answer.png",
    dieUrl:"./image/Answer_die.png",
    posX:150,
    posY:canvas.height/2,
    posCmX:170,
    posCmY:(canvas.height/2)-50,
}

const round={
    url:"./image/.png",
    posX:canvas.width/2,
    posY:10,
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
const command_X={
    text:'X',
    code:'###',
    url:"./image/x.png",
}

let QueImage = new Image();
let AnsImage = new Image();

let AnsDieImage = new Image();


let upImage = new Image();
let downImage = new Image();
let leftImage = new Image();
let rightImage = new Image();
let XImage = new Image();

let dotImage = new Image();
let dotImageUrl = ["./image/dot1.png","./image/dot2.png","./image/dot3.png"];

let correctImage = new Image();

let queEndImage = new Image();

let gunImage = new Image();

// let Q_B_Image = new Image();
// let A_B_Image = new Image();











