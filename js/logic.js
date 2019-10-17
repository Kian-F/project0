var markers = ["X", "O"];
let turn = 0;
let player = $('#nameTag').text();
let status = "active";
let scoreX = 0;
let scoreO = 0;
let counter = 0;

$('.column').on('click', function() {
  if ($(this).text().length > 0) return;
  if (status === "stop") return;
  $(this).text(markers[turn]);
  if (turn == 1) turn = 0;
  else turn = 1;
  counter++;
  if (counter === 9) {
    console.log("Draw");
  }
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
  const col8 = $("#col8");
  let winer = "";

  if (col0.text() != '' && col0.text() === col1.text() && col1.text() === col2.text()) {
    winerColor(col0, col1, col2);
    winer = col0.text();
  } else if (col3.text() != '' && col3.text() === col4.text() && col4.text() === col5.text()) {
    winerColor(col3, col4, col5);

  } else if (col6.text() != '' && col6.text() === col7.text() && col7.text() === col8.text()) {
    winerColor(col6, col7, col8);

  } else if (col0.text() != '' && col0.text() === col3.text() && col3.text() === col6.text()) {
    winerColor(col0, col3, col6);

  } else if (col1.text() != '' && col1.text() === col4.text() && col4.text() === col7.text()) {
    winerColor(col1, col4, col7);

  } else if (col2.text() != '' && col2.text() === col5.text() && col5.text() === col8.text()) {
    winerColor(col2, col5, col8);

  } else if (col0.text() != '' && col0.text() === col4.text() && col4.text() === col8.text()) {
    winerColor(col0, col4, col8);

  } else if (col2.text() != '' && col2.text() === col4.text() && col4.text() === col6.text()) {
    winerColor(col2, col4, col6);

  }
  if (winer === 'X') {
    scoreX++;
    status = "stop";

  } else if (winer === 'O') {
    scoreO++;
    status = "stop";

  }
}

function restart() {
  status = "active";
  turn = 0;
  counter = 0;
  $('.column').removeClass('win').empty()

}



$('#restart').on('click', function() {
  restart();
});