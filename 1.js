let plusBtn = document.querySelectorAll(".btn-plus");
let btnMinus = document.querySelectorAll(".btn-moins");
let btnRemove = document.querySelectorAll(".btn-delete");
let btnlike = document.querySelectorAll(".btn-like");




for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function () {
    plusBtn[i].previousElementSibling.innerHTML++;
    plusBtn[i].style.backgroundColor="pink"
    totale();
  });
}


for (let i = 0; i < btnMinus.length; i++) {
  btnMinus[i].addEventListener("click", function () {
    if (btnMinus[i].nextElementSibling.innerHTML > 0)
      btnMinus[i].nextElementSibling.innerHTML--;
    totale();
  });
}

for (let i=0; i<btnlike.length; i++) {
  btnlike[i].addEventListener("click", function (){
    console.log(btnlike[i].children[0].style.fill)
    if (btnlike[i].children[0].style.fill == "black")
      btnlike[i].children[0].style.fill = "red"
    else
      btnlike[i].children[0].style.fill = "black"
  })
}


for (let i = 0; i < btnRemove.length; i++) {
  btnRemove[i].addEventListener("click", function () {
     btnRemove[i].parentElement.parentElement.remove()
     totale()

  });
}


function totale() {
  let prices = document.querySelectorAll(".prx");
  let qte = document.querySelectorAll(".quantity");
  let sum = 0;
  for (let i = 0; i < qte.length; i++) {
    sum = sum + qte[i].innerHTML * prices[i].innerHTML;
  }
  
  document.getElementById("prix-total").innerHTML = sum;
}