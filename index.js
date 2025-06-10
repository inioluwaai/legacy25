// =========================
// Exercise 1: Quiz Game
// =========================
function quiz() {
  const QA = [
    { q: "What is the capital of France?", a: "Paris" },
    { q: "What is 2 + 2?", a: "4" },
    { q: "What is the capital of Japan?", a: "Tokyo" },
    { q: "What is the largest planet in our solar system?", a: "Jupiter" },
    { q: "Who wrote 'Hamlet'?", a: "Shakespeare" },
    { q: "What is the boiling point of water (in °C)?", a: "100" },
    { q: "What is the chemical symbol for gold?", a: "Au" },
    { q: "What year did World War II end?", a: "1945" }
  ];

  const shuffled = QA.sort(() => Math.random() - 0.5);
  let score = 0;

  for (let i = 0; i < shuffled.length; i++) {
    const userAnswer = prompt(shuffled[i].q);

    if (userAnswer === null || userAnswer.trim() === "") {
      alert("Please answer the question.");
      i--;
      continue;
    }

    if (userAnswer.trim().toLowerCase() === shuffled[i].a.toLowerCase()) {
      score++;
      alert("Correct!");
    } else {
      alert(`Incorrect! The correct answer is ${shuffled[i].a}`);
    }
  }

  const result = document.getElementById("excercise1Output");
  result.innerHTML = `🎉 Your score is: ${score}/${shuffled.length}`;
}

function clearOutput() {
  const result = document.getElementById("excercise1Output");
  if (result.innerHTML === "Your Score: ") {
    alert("Your score is already clear.");
    return;
  }
  result.innerHTML = "Your Score: ";
}

// =========================
// Exercise 2: Guessing Game
// =========================
function clearOutput2() {
  const result = document.getElementById("GuessingGameOutput");
  if (result.innerHTML === "Attempts: ") {
    alert("The guessing game output is already clear.");
    return;
  }
  result.innerHTML = "Attempts: ";
}

function startGuessingGame() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;

  while (true) {
    const input = prompt("Guess a number between 1 and 10:");
    if (input === null) {
      alert("Game Cancelled");
      return;
    }

    const guess = Number(input);
    if (isNaN(guess) || guess < 1 || guess > 10) {
      alert("Please enter a valid number between 1 and 10.");
      continue;
    }

    attempts++;
    if (guess === randomNumber) {
      alert("Congratulations! You guessed the number correctly");
      break;
    } else if (guess < randomNumber) {
      alert("Too low! Try again.");
    } else {
      alert("Too high! Try again.");
    }
  }

  const result = document.getElementById("GuessingGameOutput");
  result.innerHTML = `Attempts: ${attempts}<br>Random Number: ${randomNumber}`;
}

// =========================
// Exercise 3: Todo List
// =========================
let todo = [];

function addTask() {
  const task = prompt("Enter a task:")?.toLowerCase();
  if (!task) {
    alert("Task input cancelled or empty.");
    return;
  }
  if (todo.includes(task)) {
    alert("This task already exists in your todo list.");
    return;
  }
  todo.push(task);
  console.log("Task added:", task);
  console.log("Your Todolist items:", todo);
}

function deleteTask() {
  const taskToDelete = prompt("Enter the task you want to delete:")?.toLowerCase();
  if (!taskToDelete) {
    alert("Task deletion cancelled or empty.");
    return;
  }
  const index = todo.indexOf(taskToDelete);
  if (index === -1) {
    alert("This task does not exist in your todo list.");
    return;
  }
  todo.splice(index, 1);
  alert(`Task "${taskToDelete}" removed.`);
  console.log("Updated Todolist:", todo);
}

function displayTasks() {
  if (todo.length === 0) {
    alert("Your todo list is empty.");
    return;
  }
  const taskList = todo.map((task, i) => `${i + 1}. ${task}`).join("\n");
  alert("Your Todo List:\n" + taskList);
}

function ClearTodo() {
  if (todo.length === 0) {
    alert("Your todo list is already empty.");
    return;
  }
  todo = [];
  alert("Your todo list has been cleared.");
  console.log("Todo list cleared.");
}

// =========================
// Exercise 4: Tip Calculator
// =========================
function startTip() {
  const bill = prompt("Enter your bill amount:");
  const tipPercentage = prompt("Enter Tip Percentage (0 - 100%):");

  if (isNaN(bill) || bill.trim() === "" || isNaN(tipPercentage) || tipPercentage.trim() === "") {
    alert("Enter valid numeric values.");
    return;
  }

  const newBill = Number(bill);
  const tip = Number(tipPercentage);

  if (tip > 100) {
    alert("Tip value exceeded.");
    return;
  }

  const tipAmount = (tip / 100) * newBill;
  const totalAmount = newBill + tipAmount;
  alert(`Tip amount is: ${tipAmount}\nYour Total amount is: ${totalAmount}`);
}

// =========================
// Exercise 5: Login Simulation
// =========================
function loginSimulation() {
  const credentials = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" },
    { username: "user4", password: "password4" }
  ];

  const username = prompt("Enter your username:");
  const password = prompt("Enter your password:");

  if (!username || !password) {
    alert("Login cancelled or missing credentials.");
    return;
  }

  const user = credentials.find(user => user.username === username && user.password === password);
  if (user) {
    alert(`Access Granted! Welcome ${username}!`);
    console.log(`Access Granted for user: ${username}`);
  } else {
    alert("Login failed! Incorrect username or password.");
  }
}

// =========================
// Exercise 6: Budget Tracker
// =========================
function startBudgetTracker() {
  const income = prompt("Enter your monthly income:");
  if (isNaN(income) || income.trim() === "") {
    alert("Please enter a valid income amount.");
    return;
  }

  const itemsNumber = prompt("How many items do you want to add to your budget tracker?");
  if (isNaN(itemsNumber) || itemsNumber <= 0) {
    alert("Please enter a valid number of items.");
    return;
  }

  let total = 0;
  for (let i = 0; i < Number(itemsNumber); i++) {
    const item = prompt(`Enter your Item ${i + 1} Price:`);
    if (isNaN(item) || item.trim() === "") {
      alert("Please enter a valid item price.");
      i--;
      continue;
    }
    total += Number(item);
  }

  alert(`Total spent: ${total}\nRemaining balance: ${income - total}`);
}
