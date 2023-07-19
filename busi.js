//  oneside scroll buttone 
    window.addEventListener("DOMContentLoaded", () => {
      const cardbox = document.getElementById("s5cardbox");
      const moveicon = document.getElementById("cardscroll");
      const card = document.getElementsByClassName("s5card")[0];
      const movewidth = card.clientWidth + parseInt(window.getComputedStyle(cardbox).paddingLeft);
      const totalWidth = cardbox.scrollWidth;
    
      moveicon.addEventListener("click", () => {
        cardbox.scrollLeft += movewidth;
      });
    
    });

    // calculater to calculate price in other currency
   
    let currency = document.querySelectorAll(".currency");
let btnconvert = document.querySelectorAll(".converter .btn");
let rate = document.querySelectorAll(".rate");
let convertedrate = document.querySelectorAll(".convertedrate");
let ratevalue = 0;

let convertfn = i => {

  let cuurentRate = rate[i].innerHTML;
  console.log("grs")

  if (currency[i].value === "US dollar $") {
    ratevalue = (cuurentRate / 81.98).toFixed(2) + " $";
  } else if (currency[i].value === "Euro €") {
    ratevalue = (cuurentRate / 89.22).toFixed(2) + " €";
  } else if (currency[i].value === "Japanese Yen ¥") {
    ratevalue = (cuurentRate * 1.76).toFixed(2) + " ¥";
  } else if (currency[i].value === "Pound £") {
    ratevalue = (cuurentRate / 104.24).toFixed(2) + " £";
  } else {
    ratevalue = "--v--";
  }
  
  convertedrate[i].innerHTML = ratevalue;
};

for (let i = 0; i < currency.length; i++) {
  btnconvert[i].addEventListener("click", () => convertfn(i));
}

      
   


      
   