let adults = 42;
if(adults<0){
    adults = 0;
}

for(let i=0;i<=adults;i++){
    console.log("Ticket #"+i);
}

let children = 8;
if(children<0){
    children = 0;
}

let price;
price = calc(adults,children);

console.log(price);

function calc(adults,children){

    let price = adults*12 + children*6;
    return price;

}
window.onload = function() {
  let btn = document.getElementById("buyBtn");
  btn.onclick = function() {
    let adults = document.getElementById("adults_ticket").value;
    let children = document.getElementById("children_ticket").value;
    let price = calc(adults, children);
    alert(price);
  }
}