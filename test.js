"use strict";
console.time()
let fields = document.querySelector("#playing_field tbody");
let table = document.querySelector("table");
let Winning_data = [
  [fields.childNodes[0].childNodes[1], fields.childNodes[0].childNodes[3], fields.childNodes[0].childNodes[5]],
  [fields.childNodes[2].childNodes[1], fields.childNodes[2].childNodes[3], fields.childNodes[2].childNodes[5]],
  [fields.childNodes[4].childNodes[1], fields.childNodes[4].childNodes[3], fields.childNodes[4].childNodes[5]],
  [fields.childNodes[0].childNodes[1], fields.childNodes[2].childNodes[1], fields.childNodes[4].childNodes[1]],
  [fields.childNodes[0].childNodes[3], fields.childNodes[2].childNodes[3], fields.childNodes[4].childNodes[3]],
  [fields.childNodes[0].childNodes[5], fields.childNodes[2].childNodes[5], fields.childNodes[4].childNodes[5]],
  [fields.childNodes[0].childNodes[1], fields.childNodes[2].childNodes[3], fields.childNodes[4].childNodes[5]],
  [fields.childNodes[0].childNodes[5], fields.childNodes[2].childNodes[3], fields.childNodes[4].childNodes[1]],
];

+function click_binding() {                                                 //Привязка прослушивателя событий и стилизация Х и O
  let previous_move = true;
  Winning_data.forEach(element => {
    element.forEach(element2 => {
      element2.addEventListener("click", () => {
        if (element2.textContent == "X" || element2.textContent == "O") {}
        else if (previous_move == true) {
          element2.textContent = "X";
          previous_move = !previous_move
          element2.style.color = "rgb(134,228,199)";
        }
        else if (previous_move == false) {
          element2.textContent = "O";
          previous_move = !previous_move
          element2.style.color = "rgb(235,186,69)";
        }

        if (element.every(check_for_victory_O)) {                            //Логика победы\поражения
          document.querySelector(".o_win").style.opacity = 1;
          table.style = "pointer-events: none;"
        }
        else if (element.every(check_for_victory_X)) {
          document.querySelector(".x_win").style.opacity = 1;
          table.style = "pointer-events: none;"
        }
      })
    })
  });
}();
document.querySelector("#reset").addEventListener("click", function() {
  document.querySelector(".x_win").style.opacity = 0;
  document.querySelector(".o_win").style.opacity = 0;
  table.style = "pointer-events: auto";
  Winning_data.forEach(element => {
    element.forEach(element2 => {
      element2.textContent = "";
      })
    })
  });


function check_for_victory_X(elem) {
  return elem.textContent == "X"
}
function check_for_victory_O(elem) {
  return elem.textContent == "O"
}
console.timeEnd()

//P.S. - Знаю что некоторые решения не оптимальны с точки зрени производительности, но в угоду оригинальности оставляю как есть...

