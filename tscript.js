let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const compsr=document.querySelector("#com-score");
const usersr=document.querySelector("#user-score");
const win=document.querySelector(".winner");
const playnew=document.querySelector("#pg");
const display=document.querySelector("#display")
playnew.addEventListener("click",()=>{
    if (compscore>userscore){
        display.innerHTML=" you lost the game COMPUTER WINS";
        compscore=0;
        userscore=0;
    }
    else if (compscore<userscore){
        display.innerHTML="congrats you won the game";
        compscore=0;
        userscore=0;
    }
    else{
        display.innerHTML=" DRAW so continue game";
    }
    win.innerHTML="new game started";
    compsr.innerHTML=compscore;
    usersr.innerHTML=compscore;
    
})
const playgame=(userchoice)=>{
console.log("user choice=",userchoice);
const comchoice=compchoice();
console.log("computercoice=",comchoice);
if (userchoice==comchoice){
win.innerHTML="draw";
}
else if(userchoice=="rock" && comchoice=="scissor")
{
    userscore+=1
    usersr.innerHTML=userscore;
    win.innerHTML="congrats user winner";
}
else if(userchoice=="paper" && comchoice=="rock")
    {
        userscore+=1
        usersr.innerHTML=userscore;
        win.innerHTML="congrats user winner";
    }
  else if(userchoice=="scissor" && comchoice=="paper")
        {
            userscore+=1
            usersr.innerHTML=userscore;
            win.innerHTML="congrats user winner";
        }
else{
    compscore+=1
    compsr.innerHTML=compscore;
    win.innerHTML="computer winner";
}
}



const compchoice=()=>{
    const arr=["rock","paper","scissor"];
    const idx=Math.floor(Math.random()*3);
    return arr[idx];
}





choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        display.innerHTML="";
        const choiceid=choice.getAttribute("id");
        playgame(choiceid);
    })
})