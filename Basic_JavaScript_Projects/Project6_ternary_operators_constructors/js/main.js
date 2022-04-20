


function my_function(){
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("editMe").innerHTML = can_ride + " to ride.";
}