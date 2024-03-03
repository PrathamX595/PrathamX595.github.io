let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let winCondi = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]];
let turn = true ;

function gameAgain(){
    turn = true;
    boxes.forEach((box) => {
        let classes = box.classList;
        classes.remove("permaTurnX");
        classes.remove("permaTurnO");
        classes.remove("winBorder");
        box.innerText = " ";
        box.disabled = false;
        classes.remove("invisborder");
    })
}

function winCondition(){
    let i = 0;
    for(i; i < winCondi.length; ++i){
        let condi = winCondi[i]; 
        if(boxes[condi[0]].disabled == true && boxes[condi[1]].disabled == true && boxes[condi[0]].disabled == true && boxes[condi[0]].innerText === boxes[condi[1]].innerText && boxes[condi[1]].innerText === boxes[condi[2]].innerText && boxes[condi[2]].innerText === boxes[condi[0]].innerText){
            let b0Class = boxes[condi[0]].classList;
            let b1Class = boxes[condi[1]].classList;
            let b2Class = boxes[condi[2]].classList;
            b0Class.remove("permaTurnX");
            b0Class.remove("permaTurnO");
            b1Class.remove("permaTurnX");
            b1Class.remove("permaTurnO");
            b2Class.remove("permaTurnX");
            b2Class.remove("permaTurnO");
            b0Class.add("winBorder");
            b1Class.add("winBorder");
            b2Class.add("winBorder");
            boxes.forEach((box) => {
                box.disabled = true;
                let classes = box.classList;
                classes.add("invisborder");
            })
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
    box.addEventListener("mouseover", ()=>{
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

