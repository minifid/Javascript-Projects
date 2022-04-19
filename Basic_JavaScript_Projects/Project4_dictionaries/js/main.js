function my_function(){
    //creates a dictionary
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark"
    }
    //edits dictionary
    delete Animal.Breed;
    //attempts to display deleted kvp (returns undefined)
    document.getElementById("editMe").innerHTML = Animal.Breed;
}