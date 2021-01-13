const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const game={
    wrong: false,
    corrent: false,
    // save_LS_Key:"Round",
    // sav_LS_value:null,
}

const Question={
    url:"./image/Question.png",
    EndUrl: "./image/your-turn.png",
    correctUrl: "./image/correct.png",
    gunUrl: "./image/gun1.png",
    posX:750,
    posY:canvas.height/2,
    posCmX:650,
    posCmY:(canvas.height/2)-50,

    queEnd:false,
}

const Answer={
    url:"./image/Answer.png",
    dieUrl:"./image/Answer_die.png",
    posX:150,
    posY:canvas.height/2,
    posCmX:170,
    posCmY:(canvas.height/2)-50,

    ansEnd:false,
    pushKey:false,
}

const round={
    url:"./image/round.png",
    posX:(canvas.width/2)-95,
    posY:-10,
    num:0,
    text:null,
    commandsCount: null,

    tutorial:10, //round 0~1
    easy: 2, //round 2~4
    normal: 3, //round 5~8
    hard: 4, //round 9~15
    hell: 6, //round 16~20,
    jjin_hell: 7, //round 21~30
    jjinJJin_hell:9, //round 31~
}

const roundTypeUrl = ["./image/round_tutorial.png","./image/round_easy.png","./image/round_normal.png","./image/round_hard.png",
"./image/round_hell.png","./image/round_jjin_hell.png","image/round_jjinJJin_hell.png"];

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

let roundImage = new Image();
let roundTypeImage = new Image();













