var markers = ["X", "O"];
let turn = 0;
let status = "active";
let scoreX = 0;
let scoreO = 0;
let counter = 0;
let availeble = [];
let currentPlayer;
let grid = ["", "", "", "", "", "", "", "", ""];
let board;
let huPlayer;

$(document).ready(function () {
  $("#col0").fadeIn(5000);
});
$(".column").on("click", function () {
  if ($(this).text().length > 0) return;
  if (status === "stop") return;
  $(this).text(markers[turn]);
  if (markers[turn] === "X") {
    $(this).addClass("imgeX");
  } else {
    $(this).addClass("imgeO");
  }
  if (turn == 1) turn = 0;
  else turn = 1;

  counter++;
  win();
  const cells = $(".column");
  board = Array.from(Array(9).keys());

  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", turnClick, false);
  }

  function turnClick(square) {
    if (typeof board[square.target.id] == "number") {
      turn(square.target.id, huPlayer);
      if (!checkTie()) turn(bestSpot(), aiPlayer);
    }
  }
  function turn(squareId, player) {
    borad[squareId] = player;
    document.getElementById(squareId).innerText = player;
  }

  // draw is when there are 9 plays and no winners
  if (counter >= 9 && status !== "stop") {
    drawMessage();
  }
});

// const drawMessage = function(){
//   $()
// }

function winerColor(c0, c1, c2) {
  c0.addClass("win");
  c1.addClass("win");
  c2.addClass("win");
}

function win() {
  const col0 = $("#col0");
  const col1 = $("#col1");
  const col2 = $("#col2");
  const col3 = $("#col3");
  const col4 = $("#col4");
  const col5 = $("#col5");
  const col6 = $("#col6");
  const col7 = $("#col7");
  const col8 = $("#col8");
  let winer = "";

  if (
    col0.text() != "" &&
    col0.text() === col1.text() &&
    col1.text() === col2.text()
  ) {
    winerColor(col0, col1, col2);
    winer = col0.text();
  } else if (
    col3.text() != "" &&
    col3.text() === col4.text() &&
    col4.text() === col5.text()
  ) {
    winerColor(col3, col4, col5);
    winer = col3.text();
  } else if (
    col6.text() != "" &&
    col6.text() === col7.text() &&
    col7.text() === col8.text()
  ) {
    winerColor(col6, col7, col8);
    winer = col6.text();
  } else if (
    col0.text() != "" &&
    col0.text() === col3.text() &&
    col3.text() === col6.text()
  ) {
    winerColor(col0, col3, col6);
    winer = col0.text();
  } else if (
    col1.text() != "" &&
    col1.text() === col4.text() &&
    col4.text() === col7.text()
  ) {
    winerColor(col1, col4, col7);
    winer = col1.text();
  } else if (
    col2.text() != "" &&
    col2.text() === col5.text() &&
    col5.text() === col8.text()
  ) {
    winerColor(col2, col5, col8);
    winer = col2.text();
  } else if (
    col0.text() != "" &&
    col0.text() === col4.text() &&
    col4.text() === col8.text()
  ) {
    winerColor(col0, col4, col8);
    winer = col0.text();
  } else if (
    col2.text() != "" &&
    col2.text() === col4.text() &&
    col4.text() === col6.text()
  ) {
    winerColor(col2, col4, col6);
    winer = col2.text();
  }
  if (winer === "X") {
    $("#xscore").text((scoreX += 1));
    $("#WinXMessage").css("visibility", "visible");
    $("#boardGame").css("visibility", "hidden");
    status = "stop";
  } else if (winer === "O") {
    $("#oscore").text((scoreO += 1));
    $(".WinOMessage").css("visibility", "visible");
    $("#boardGame").css("visibility", "hidden");
    status = "stop";
  }
}

function restart() {
  status = "active";
  turn = 0;
  counter = 0;
  $(".column").removeClass("win").empty();
  $(".column").removeClass("imgeX").empty();
  $(".column").removeClass("imgeO").empty();
  $(".WinXMessage").removeClass("WinXMessage").empty();
  $(".WinOMessage").removeClass("WinOMessage").empty();
  $(".boardGame").removeClass("DrawMessage");
}

$("#restart").on("click", function () {
  restart();
});

const drawMessage = function () {
  $("#message").text("Draw").css({
    color: "#ff5454",
    visibility: "visible",
    "font-size": "17px",
    "letter-spacing": "2px",
    "line-height": "24px",
  });
  setTimeout(function () {
    $("#message").fadeOut();
  }, 3000);
  return true;
};

$("#drawRemove").on("click", function () {
  restart();
});

// function computerPlay() {
//
// }
