let boxes = document.querySelectorAll(".box");
let winCondi = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6],];
let turn = true ;

boxes.forEach((box) => {
    box.addEventListener('click',() => {
        if(turn){
            box.innerText = "X";
            turn = false ;
            let classes = box.classList;
            classes.add("permaTurnX");
        }
        else{
            box.innerText = "O";
            turn = true ;
            let classes = box.classList;
            classes.add("permaTurnO");
        }
        box.disabled = true;
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