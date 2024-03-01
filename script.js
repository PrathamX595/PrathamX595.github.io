let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let winCondi = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]];
let turn = true ;

function gameAgain(){
    turn = true;
    boxes.forEach((box) => {
        let classes3 = box.classList;
        classes3.remove("permaTurnX");
        classes3.remove("permaTurnO");
        box.innerText = " ";
        box.disabled = false;
    })
}

function winCondition(){
    let i = 0;
    for(i; i < winCondi.length; ++i){
        let condi = winCondi[i]; 
        if(boxes[condi[0]].disabled == true && boxes[condi[1]].disabled == true && boxes[condi[0]].disabled == true && boxes[condi[0]].innerText === boxes[condi[1]].innerText && boxes[condi[1]].innerText === boxes[condi[2]].innerText && boxes[condi[2]].innerText === boxes[condi[0]].innerText){
            gameAgain();
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener('click',() => {
        if(turn){
            box.innerText = "X";
            turn = false ;
            let classes = box.classList;
            box.style.color = ("rgb(138, 23, 23)");
            classes.add("permaTurnX");
        }
        else{
            box.innerText = "O";
            turn = true ;
            let classes = box.classList;
            box.style.color = ("rgb(41, 127, 118)");
            classes.add("permaTurnO");
        }
        box.disabled = true;
        winCondition();
    })
})

boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        if(turn){
            let classes = box.classList;
            classes.add("turnX");
        }
        else{
            let classes = box.classList;
            classes.add("turnO");
        }
    })
})

boxes.forEach((box) => {
    box.addEventListener("mouseleave", () => {
            let classes = box.classList;
            classes.remove("turnX");
            classes.remove("turnO");
    })
})

reset.addEventListener('click', () => {
    gameAgain();
})

newGame.addEventListener('click', () => {
    gameAgain();
})