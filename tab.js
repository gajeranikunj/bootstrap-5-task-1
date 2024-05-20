var btn1 = document.getElementById("data1");
var btn2 = document.getElementById("data2");
var btn3 = document.getElementById("data3");

var pag1 = document.getElementById("tab1");
var pag2 = document.getElementById("tab2");
var pag3 = document.getElementById("tab3");

pag1.style.display = "block";
pag2.style.display = "none";
pag3.style.display = "none";

btn1.addEventListener("click", function () {
    pag1.style.display = "block";
    pag2.style.display = "none";
    pag3.style.display = "none";


    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
});
btn2.addEventListener("click", function () {
    pag1.style.display = "none";
    pag2.style.display = "block";
    pag3.style.display = "none";

    btn2.classList.add("active");
    btn1.classList.remove("active");
    btn3.classList.remove("active");

});
btn3.addEventListener("click", function () {
    pag1.style.display = "none";
    pag2.style.display = "none";
    pag3.style.display = "block";

    btn3.classList.add("active");
    btn2.classList.remove("active");
    btn1.classList.remove("active");

});

