let gameseq=[];
let userseq=[];

let btns=["red","yellow","green","purple"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    }

});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
};


function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

let randInx=Math.floor(Math.random() * 4);
let randcolor=btns[randInx];
let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    gameFlash(randbtn);
}
function checkAns(idx){
   

    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
          setTimeout(levelUp,1000);
        }

    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnpress(){
    let btn=this;

    userFlash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}


function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
