# 🎮 Tic Tac Toe — A Classic Game Reimagined

A modern, responsive, and interactive version of the classic **Tic Tac Toe** game — built purely with **HTML**, **CSS**, and **JavaScript**.

---

## 🏁 Overview

This project is a browser-based implementation of the timeless **Tic Tac Toe** game.  
It combines **clean UI design**, **fluid responsiveness**, and **engaging game logic** — all without using any frameworks.

---

## 🚀 Live Demo

🔗 **Play the Game Here:** [Live Demo](https://tic-tac-toe-product.netlify.app/)  

## 📸 Preview

![Tic Tac Toe Preview](assets/preview.png)
---

## ✨ Key Features

### 🎯 Gameplay
- Two-player mode for **local multiplayer**  
- Real-time **turn indication** and **active player highlighting**  
- **Dynamic scoreboard** that tracks total wins  

### 🎨 Design & UI
- Responsive layout built with **CSS Grid** and **Flexbox**  
- Minimal **dark theme** with glowing accents  
- Smooth **animated transitions** for moves and results  

### ⚙️ Functionality
- **Reset** → starts a new round (keeps the score)  
- **Restart** → fresh game (resets players and scores)  
- **Tie and win detection** with smooth timing delays  

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Game structure and layout |
| **CSS3** | Styling, responsiveness, and animations |
| **JavaScript (ES6)** | Game logic, DOM manipulation, and interactivity |

---

## 🕹️ How to Play

1. Enter both player names on the home screen.  
2. Click **Start Game**.  
3. Players take turns marking cells with `X` or `O`.  
4. The first player to align **three marks** (row, column, or diagonal) wins.  
5. Click **Reset** to play another round, or **Restart** to start over completely.  

---

## 🧠 Game Logic Overview

The game logic is **modular, optimized, and efficient**, powered by simple data structures and clear control flow.

- The board is represented by a **9-element array**.  
- Move validation ensures **no overwriting** of cells.  
- Win detection checks **all possible line combinations**.  
- Player switching handled by **toggle states** after every valid move.  

**Win pattern combinations:**

```js
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
```
## 💅 Visual Theme
### 🎨 Color Palette

| Element | Color | Description |
|----------|--------|-------------|
| **Background** | `#2a2a2a` | Dark minimal base |
| **Primary Accent** | `#00ffae` | Vibrant mint green |
| **Highlight** | `#f4ff8f` | Soft yellow |

---

### 🖋️ Typography

- **Bitcount Grid Single** — used for the game title  
- **Ubuntu** — for readability and modern feel  

---

## 1. Clone the repository
git clone https://github.com/Tusharmgs/tic-tac-toe.git

## 2. Go into the project folder
cd tic-tac-toe

## 3. Open the project with Live Server (VS Code extension)

## 🧑‍💻 Author

**😊 Tushar Keshari**  
🎓 *BCA, Microtek College of Management and Technology*  
💡 Passionate about **front-end development** and **interactive web design**

---

## 📬 Connect with Me

- 🔗 [**LinkedIn**](https://www.linkedin.com/in/tushar-keshar-mgs)  
- 💻 [**GitHub**](https://github.com/Tusharmgs)

---

## ⭐ Support

If you enjoyed this project, consider supporting it:

⭐ **Star** this repository  
🍴 **Fork** it to create your version  
💬 **Share feedback or ideas** — contributions are always welcome!
