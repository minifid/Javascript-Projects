//returns current todo list as an array
function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
//creates a new Todo Item
function newTodo() {
    var task = document.getElementById('task').value;
    var todos = get_todos();
    document.getElementById('task').focus(); //sets focus back to the textbox
    if (task == ''){return} // prevents adding items with nothing in them
    todos.push(task)
    localStorage.setItem('todo', JSON.stringify(todos)); //saves new item
    document.getElementById("task").value = "";
    show();//recreates the todo list to include new item
    return false;
}

function show() {
    var todos = get_todos();
    var html = '<ul>';
    for (var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" onclick="remove(' + i + ')" id ="' + i + '">x</button></li>';
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;
}

function remove(n) {
    var todos = get_todos();
    todos.splice(n,1)
    localStorage.setItem('todo', JSON.stringify(todos));
    show()
}

//creates event listeners
document.getElementById('add').addEventListener('click', newTodo);
document.getElementById('task').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      newTodo();
    }
  });
// document.getElementById('add').addEventListener('', newTodo);
//creates the list
show();