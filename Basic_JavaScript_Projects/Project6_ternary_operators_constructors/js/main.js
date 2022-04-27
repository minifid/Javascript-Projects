

//ternary operator
function my_function(){
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("editMe").innerHTML = can_ride + " to ride.";
}

//nested function increments a value
function nested_function(){
    console.log('working');
    var nested_function = document.getElementById('nested_function');
    nested_function.innerHTML= count();
    function count(){
        var Starting_point = parseInt(nested_function.innerHTML);
        console.log(Starting_point);
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

//object constructor
function User(id, username, password){
    this.id=id;
    this.username=username;
    this.password=password
}

var Jay= new User(1, "Jay", "SecurePassword");
document.getElementById("constructor").innerHTML = "#" + Jay.id + " " + Jay.username;