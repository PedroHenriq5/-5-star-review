const $button = document.querySelector(".btn-submit");
const $container = document.querySelector(".container");
const $result = document.querySelector(".result-container");
const $rating =document.getElementById("rating");
const $btns = document.querySelectorAll(".btn");


function submit(){
    $container.classList.add("hide");
    $result.classList.remove("hide");
}


function back(){
    $container.classList.remove("hide");
    $result.classList.add("hide");
}

$btns.forEach((rate) => {
    rate.addEventListener("click", () =>{
        $rating.innerHTML = rate.innerHTML;
    })
})