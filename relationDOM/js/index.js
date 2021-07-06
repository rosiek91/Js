const link = document.querySelector(".link");

const href = link.getAttribute("href");

link.setAttribute("href", "http://google.pl");

const container = document.querySelector(".section");

const p = document.querySelector("h1");
console.log(p.textContent);
p.textContent = "Lubię jeść placki";

