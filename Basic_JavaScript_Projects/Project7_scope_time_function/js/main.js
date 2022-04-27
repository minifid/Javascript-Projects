//saya if they are closed or not
function Hours(){
    if (new Date().getHours() < 17 || new Date().getHours() > 9){
        document.getElementById("hours").innerHTML="Hello, how can we help today"
    } else {
        document.getElementById("hours").innerHTML="Sorry We are Currently closed. Hours are 9am-5pm"
    }
}

//tells you if it is morning/afternoon/evening
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

var num1 = 19; //global
function my_fucntion(){
    console.log('test') // since this does not display i know the function is not being call rather than having an issue within
    var num2=5; //local
    var sum = num1 + num2
    document.getElementById('math').innerHTML = sum
}