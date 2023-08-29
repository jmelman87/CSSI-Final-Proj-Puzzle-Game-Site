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
        tile.src = "./image5/" + pieces[i] + ".jpg";

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

  if (board.innerHTML === '<img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/25.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/24.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/23.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/22.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/21.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/20.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/19.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/18.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/17.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/16.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/15.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/14.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/13.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/12.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/11.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/10.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/9.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/8.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/7.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/6.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/5.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/4.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/3.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/2.png"><img src="https://cssi-2022-final-project.joshuamelman87.repl.co/image5/1.png">') {
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

