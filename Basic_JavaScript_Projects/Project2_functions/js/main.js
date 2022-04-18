// will add Peek'a'boo at the end of the #myID element when called
function myFunction(){
    var myVar = document.getElementById('myID').textContent;
    myVar += ' Peeka\'a\'boo';
    document.getElementById('myID').innerHTML=myVar;
    console.log(myVar)
}