"use strict";
let fields = document.querySelector("#playing_field tbody");
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
console.log(Winning_data[0]);
+function click_binding() {                                                 //Привязка прослушивателя событий и стилизация Х и O
  let previous_move = true;
  Winning_data.forEach(element => {
    Array.from(element.children).forEach((element2) => {
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
      })
    })
  });
}();


function logics () {
  console.log("!!!!");
  Winning_data.forEach(element => {
    let temporary_array = [];
    element.forEach(element2 => {
      if (element2.textContent == "X") {
        temporary_array.push()
      }
      else if (element2.textContent == "O") {
        alert("O - победили!")
      }
    });
  });
};




