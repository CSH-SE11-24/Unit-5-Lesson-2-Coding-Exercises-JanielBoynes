// Task 1: Log a greeting message, "Script running" to the console.
console.log("script running")

// Task 2: Prompt the user to enter their username and save it in a variable called 'userName'. Then, console log "Hello, [userName]!"
let userName= prompt("Enter your name")
console.log("Hello" + userName)


// Task 3: Declare a variable named 'age' and assign it your age. Then, log a message to the console saying "I'm [age] years old."
let age = 17
console.log("Im " + age + " years old. ")



// Task 4: Create an object named 'class' with properties such as 'className', 'teacher', and 'grade'. Assign appropriate values to these properties.

let myClass={
  className: "Software Engeneering",
  teacher:"pham and Gomes" ,
  grade:85
};


// Task 5: Console log "I'm taking [className] with [teacher]"
console.log(`Im taking ${myClass.className}
            with ${myClass.teacher}`)




// Task 6: Write an if/else statement that checks if the grade is equal to or over 63. If it is, print "I am passing", else print "Oh no, I'm not passing YET."

if(myClass.grade>=63){
  console.log("I am passing")
}else{
  console.log("oh no,Im not passing YET.")
}
