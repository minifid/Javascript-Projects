let slideIndex = 0
showSlides();

function showSlides() {
    let i;
    let slides= document.getElementsByClassName("mySlides");
    for (i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex=1};
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
    console.log('timer')
}


function timer(){
    var seconds = document.getElementById("seconds").value
    var timer = document.getElementById("time_left");
    console.log(seconds)
    function tick(){
        seconds = seconds - 1;
        timer.innerHTML = seconds
        var time = setTimeout(tick, 1000);
        if (seconds <= -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML="";
        }
    }
    tick()
}
