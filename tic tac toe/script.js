let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newbutton = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".mes-container");
let msg = document.querySelector("#msg")

let turnO = true;//playerX , playerO

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = () => {
      turnO = true ;
      enableBoxes();
      msgcontainer.classList.add("hide");

} 






boxes.forEach((box) => {
      box.addEventListener("click" , () =>{
       
       if(turnO){
        box.innerText = "O";
        turnO = false;
       }else{ // player x
            box.innerText = "X";
            turnO = true;
        }
       box.disabled = true;

     checkWinner();
 


      });
});

const disableBoxes = () => {
          for(let box of boxes){
            box.disabled = true;
          }
};

const enableBoxes = () => {
    for(let box of boxes){
      box.disabled = false;
      box.innerText = "";
    }
};


const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
 

const checkWinner = () =>{
    for ( let pattern of winpattern){
      
        let pos1val =  boxes[pattern[0]].innerText;
        let pos2val =  boxes[pattern[1]].innerText;
        let pos3val =  boxes[pattern[2]].innerText;

        if(pos1val != "" && pos1val != "" && pos1val != ""){
         if (pos1val === pos2val && pos2val === pos3val){
            
            
            
            showWinner(pos1val);
        
        }
    }
  };
}

newbutton.addEventListener("click" , resetgame);

resetbtn.addEventListener("click" , resetgame);