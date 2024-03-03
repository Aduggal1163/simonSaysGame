let gameseq=[];
let userseq=[];
let btns=['yellow','red','green','purple'];
let started=false;
let level=0;
let h2=document.querySelector('h2');
document.addEventListener('keypress',function(){
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
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${ level}`;
    let randomIdx=Math.floor(Math.random()*4);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameseq.push(randomColor);
    // console.log(gameseq);
    gameFlash(randomBtn);
}
function checkAns(idx){
    // console.log("curr level: ",level);
       if(userseq[idx]==gameseq[idx]){
        // console.log("same");
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
           }
       }
       else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b><br>press any key to start`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
         document.querySelector('body').style.backgroundColor='bisque';
        },150);
      reset();
    }
       
}
function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute('id');
    userseq.push(userColor);
    checkAns(userseq.length-1);
}
let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}