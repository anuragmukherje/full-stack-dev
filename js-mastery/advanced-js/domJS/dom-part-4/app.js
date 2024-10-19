// Class list =>
    // classList.add("className"); => adds class to an element
    // classList.remove("className"); => removes the class from an element
    // classList.toggle("className"); => opposite function -> if className present 
    // then removes it and vice-versa

const hTagEl = document.querySelector("h1");
console.log(hTagEl.classList);

const hTagEl1 = document.querySelector("h2");
hTagEl1.classList.add("styles");

hTagEl.classList.remove("styles");

hTagEl1.classList.toggle("styles");
hTagEl1.classList.toggle("style");