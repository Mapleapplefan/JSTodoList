let input = prompt("Enter a task (or type 'quit' or 'q' to exit):");
const todos = ['eat breakfast', 'play games', 'learn JavaScript'];
while (input!=='quit' && input !='q'){
    if (input === 'list') {
        for (let i=0; i<todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
    }
    if (input === 'new') {
        input = prompt ("Enter a new task:");
        todos.push(input);
        console.log(`Added task: ${input}`);
    }
    if (input === 'delete') {
        input = prompt("Enter the task to delete:");
        for (let i = 0; i < todos.length; i++) {
            if (todos[i] === input) {
                todos.splice(i, 1);
                console.log(`Deleted task: ${input}`);
                break;
            }
        }
    }
    input = prompt("what would you like to do?");
}
alert("You have quit the task manager.");
console.log("Goodbye!");