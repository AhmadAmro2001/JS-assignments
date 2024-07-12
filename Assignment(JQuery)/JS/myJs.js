$(".openIcon").click(function(){
    $(".open").css("left", "0")
})

$(".close").click(function(){
    $(".open").css("left", "-270px")
})


$(".acc h3").click(function(){
    $(this).next().slideToggle()

    $(".acc div").not($(this).next()).slideUp()
})

let hrs = document.querySelector(".hours");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

getTime()

function getTime(){
    let date = new Date();
    let hours = date.getHours();
    let mins =date.getMinutes();
    let seconds = date.getSeconds();

    hrs.innerHTML = `${hours} hr`
    min.innerHTML = `${mins} min`
    sec.innerHTML = `${seconds} sec`
}

setInterval(function(){
    getTime();
},1000)



$("textarea").keyup(function(){
    let myLength = $(this).val().length;

    $("#num").text(
        100 -myLength <= 0 ? "you have reached your limit" : 100-myLength
    )
})