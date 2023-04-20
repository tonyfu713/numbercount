const fount = document.querySelector("#fount");
const back = document.querySelector("#back");
const count = document.querySelector("#count");
const ans = document.querySelector("#ans");
const run = document.querySelector("#run");


run.addEventListener("click",function(){
    let num1 = fount.value;
    let num2 = back.value;
    console.log(num1);
    let ans2 = 0;
    
    if(count.value === "+"){
        ans2 = (+num1) + (+num2);
    }
    if(count.value === "-"){
        ans2 = (+num1) - (+num2);
    }
    if(count.value === "*"){
        ans2 = (+num1) * (+num2);
    }
    if(count.value === "/"){
        ans2 = (+num1) / (+num2);
    }
    
    ans.innerHTML = ans2;

});



