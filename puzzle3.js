var rows = 5;
var columns = 5;

var currTile;
var otherTile;

var turns = 0;

const board = document.querySelector("#board");

window.onload = function() {
    //initialize the 5x5 board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //<img>
            let tile = document.createElement("img");
            tile.src = "./image1/blank3.jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i=1; i <= rows*columns; i++) {
        pieces.push(i.toString()); //put "1" to "25" into the array (puzzle images names)
    }
    pieces.reverse();
    for (let i =0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./image3/" + pieces[i] + ".jpg";

        //DRAG FUNCTIONALITY
        tile.addEventListener("dragstart", dragStart); //click on image to drag
        tile.addEventListener("dragover", dragOver);   //drag an image
        tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
        tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
        tile.addEventListener("drop", dragDrop);       //drop an image onto another one
        tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

        document.getElementById("pieces").append(tile);
    }
}

//DRAG TILES
function dragStart() {
    currTile = this; //this refers to image that was clicked on for dragging
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; //this refers to image that is being dropped on
}

function dragEnd() {
    if (currTile.src.includes("blank")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;

  if (board.innerHTML === '<img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/25.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/24.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/23.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/22.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/21.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/20.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/19.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/18.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/17.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/16.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/15.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/14.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/13.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/12.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/11.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/10.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/9.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/8.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/7.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/6.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/5.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/4.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/3.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/2.jpg"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image3/1.jpg">') {
  console.log("puzzle solved");
  setTimeout(function(){
      alert("PUZZLE HAS BEEN SOLVED! Turns: " + turns);
}, 1000); 
}
  else {
    console.log("puzzle not solved yet... turns: " + turns);
  }
}

//Hint Button 
const hintButton = document.querySelector('#hint');
const hintImage = document.querySelector('.dropdown')
hintButton.addEventListener('click', (e) => {
  console.log("boop");  
  hintImage.classList.remove('is-hidden');
});

