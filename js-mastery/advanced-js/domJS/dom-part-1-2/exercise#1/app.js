const tagEl = document.getElementsByTagName("h4");
console.log(tagEl);

const divElCls = document.getElementsByClassName("green");
console.log(divElCls);

const divElId = document.getElementById("blue");
console.log(divElId);

const divElClsId1 = document.querySelector(".yellow");
const divElClsId2 = document.querySelector("#yellow");

console.log(divElClsId1);
console.log(divElClsId2);

const divQSAll = document.querySelectorAll(".teal");
console.log(divQSAll);