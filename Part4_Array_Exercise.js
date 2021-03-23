// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array

function addNew(){
    var name = prompt('Entere name you want to add')
    roster.push(name)
}


// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

function remove(){
    var name = prompt('Enter name you want to remove')
    var index = roster.indexOf(name);
    roster.splice(index, index);
}

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.

function display(){
    return roster;
}


// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
var start = prompt('Would you like to start roster web app? y/n');
var request = '';

if (start == 'y'){
    while (true){
        var input = prompt('Please select an action: add, remove, display or quite.')
        if (input == 'add'){
            addNew();
        } else if (input == 'remove'){
            remove();
        } else if (input == 'display'){
            console.log(roster);
        } else if (input == 'quite'){
            break;
        } else{
            alert('Not recognized command!')
        }
    }
} 
alert('Thanks for using a web app. You can refresh to start over.')