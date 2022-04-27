

function my_function(){
    var my_int = 3.141592613;
    var my_string = "Mutilate me ";
    var pi = my_int.toPrecision(3);// takes pi to 3 digits
    var my_string = my_string.concat(my_string.slice(9),pi.toString());//slices string and concats it with old string and pi
    document.getElementById('string').innerHTML = my_string;
}