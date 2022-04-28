const myArray = ["Hello", "World"];

function my_function(){
    var i=0;
    var sum=0;
    while (i<=10){
        sum= sum + i;
        i++;
    }
    document.getElementById("sumation").innerHTML = sum;
    let Apple= new Fruit("Apple", "Red", true);
    let Banana= new Fruit("Banana", "Yellow", false);
    document.getElementById("Fruit").innerHTML = Apple.name;
    var fruit=document.getElementById("Fruit");
    for (let i=0;i<myArray.length;i++){
        fruit.innerHTML = fruit.innerHTML + myArray[i];
    }

}

function Fruit(name, color, ripe){
    this.name = name;
    this.color = color;
    this.ripe = ripe;
}