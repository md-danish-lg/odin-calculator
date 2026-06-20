# odin-calculator# 🧮 Calculator Project

A basic calculator built using **HTML, CSS, and JavaScript**.  
It supports basic arithmetic, chained operations, decimal input, delete, and clear functionality.

---

## 🚀 Features

- Basic operations:
  - Addition (+)
  - Subtraction (-)
  - Multiplication (*)
  - Division (/)

- Live screen display updates
- Decimal support (prevents multiple decimals per number)
- Backspace (Del) functionality
- Clear (reset) functionality
- Basic error handling for invalid inputs

---

## 🧠 How It Works

The calculator uses three main state variables:

- `firstNumber` → stores the first input
- `operate` → stores the selected operator
- `secondNumber` → stores the second input

Flow:
1. User enters first number
2. User selects operator
3. User enters second number
4. Press `=` to evaluate
5. Result becomes the new `firstNumber`

---

## ⚙️ Core Logic

- `updateDisplay()` → updates the screen using current state
- `evaluate()` → performs calculation based on operator
- `del()` → removes last entered character
- `clear()` → resets all values

---

## 🔢 Supported Operations

add(a, b) → a + b  
subtract(a, b) → a - b  
multiply(a, b) → a * b  
divide(a, b) → a / b  

---

## 🧩 State Handling

display = firstNumber + operator + secondNumber

---

## ⚠️ Known Behaviors

- Only one operator is allowed at a time
- Multiple decimals are prevented per number
- Division by zero returns an error message
- Pressing `=` without full input shows error

---

## 📁 Project Structure

/index.html → UI layout  
/style.css → Styling  
/script.js → Calculator logic  

---

## 🛠️ What I Learned

- DOM manipulation
- Event handling
- State management in vanilla JavaScript
- Building UI logic without frameworks

---

## 🔮 Future Improvements

- Keyboard input support
- Better error UI handling
- Calculation history
- Scientific calculator functions

---

## 🧑‍💻 Author

Built as a JavaScript learning project for the odin project focused on logic building and DOM interaction.
