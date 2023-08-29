var rows = 5;
var columns = 5;

var currTile;
var otherTile;

var turns = 0;


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
        tile.src = "./image6/" + pieces[i] + ".jpg";

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

  if (board.innerHTML === '<img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/25.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/24.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/23.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/22.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/21.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/20.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/19.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/18.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/17.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/16.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/15.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/14.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/13.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/12.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/11.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/10.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/9.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/8.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/7.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/6.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/5.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/4.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/3.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/2.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image6/1.png">') {
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

