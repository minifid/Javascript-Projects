
function Hours(){
    if (new Date().getHours() < 17 || new Date().getHours() > 9){
        document.getElementById("hours").innerHTML="Hello, how can we help today"
    } else {
        document.getElementById("hours").innerHTML="Sorry We are Currently closed. Hours are 9am-5pm"
    }
}

function Time_function() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "Good Morning";
    }
    else if (time >=12 == time < 18) {
        reply = "Good afternoon";
    }
    else {
        reply = "Good Evening"
    }
    document.getElementById("time_of_day").innerHTML = reply
}

var num1 = 19;
function my_fucntion(){
    console.log('test')
    var num2=5;
    var sum = num1 + num2
    document.getElementById('math').innerHTML = sum
}