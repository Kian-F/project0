var markers = ["X", "O"];
var turn = 0;
var player = $('#nameTag').text();
var status = "active";
var score = 0;

// function playGame(culId) {
$('.column').on('click', function() {
  if ($(this).text().length > 0) return;
  if (status === "stop") return;
  $(this).text(markers[turn]);
  if (turn == 1) turn = 0;
  else turn = 1;
  win();

})

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

  if (col0.text() != '' && col0.text() === col1.text() && col1.text() === col2.text()) {
    winerColor(col0, col1, col2);
    status = "stop";
  } else if (col3.text() != '' && col3.text() === col4.text() && col4.text() === col5.text()) {
    winerColor(c3, c4, c5);
  } else if (col6.text() != '' && col6.text() === col7.text() && col7.text() === col7.text()) {
    winerColor(c1, c2, c3);
  } else if (col0.text() != '' && col0.text() === col3.text() && col3.text() === col6.text()) {
    winerColor(c1, c2, c3);
  } else if (col1.text() != '' && col1.text() === col4.text() && col4.text() === col7.text()) {
    winerColor(c1, c2, c3);
  } else if (col2.text() != '' && col2.text() === col5.text() && col5.text() === col7.text()) {
    winerColor(c1, c2, c3);
  } else if (col0.text() != '' && col0.text() === col4.text() && col4.text() === col7.text()) {
    winerColor(c1, c2, c3);
  } else if (col2.text() != '' && col2.text() === col4.text() && col4.text() === col7.text()) {
    winerColor(c1, c2, c3);
  }
}




// $(document).ready(function() {
//   const grid = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   const columns = document.querySelectorAll('.column');
//   //  startGame();
//   board =
//
//     $('.column').click(function() {
//       $(this).html(playerChoice);
//     });
// });