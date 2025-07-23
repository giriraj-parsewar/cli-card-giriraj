# 👨‍💻 Giriraj Parsewar – CLI Business Card

> A terminal-based business card with animations, projects, tech stack explorer, and interactive links — all from your terminal.

---

## 🦪 Try it (run on command line)

```bash
npx giriraj
```

---

## 📆 What is this?

This is a Node.js-based interactive **CLI business card** that showcases:

* Animated introduction with gradient headers and ASCII art
* Interactive menu with options to open LinkedIn, GitHub, Resume, Email, and more
* Rich display of your tech stack, achievements, and projects

### Built with:

* [`chalk`](https://www.npmjs.com/package/chalk) – for colorful text
* [`boxen`](https://www.npmjs.com/package/boxen) – to box your content
* [`inquirer`](https://www.npmjs.com/package/inquirer) – for the menu system
* [`open`](https://www.npmjs.com/package/open) – to open links
* [`gradient-string`](https://www.npmjs.com/package/gradient-string) – for beautiful gradient titles
* [`figlet`](https://www.npmjs.com/package/figlet) – ASCII art
* [`ora`](https://www.npmjs.com/package/ora) – terminal spinners and animations

---

## 📂 Folder Structure

```
.
├── card.js              # CLI script
├── package.json         # npm config
├── .gitignore
└── README.md
```

---

## 🚀 How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/cli-card-giriraj.git
cd cli-card-giriraj
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run it

```bash
node card.js
```

---

## 🔗 Set Up as Global CLI Command

### 1. In `package.json`, ensure:

```json
"bin": {
  "giriraj": "./card.js"
},
"type": "module"
```

### 2. Add a shebang to top of `card.js`

```js
#!/usr/bin/env node
```

### 3. Link it locally

```bash
npm link
```

Now you can run:

```bash
giriraj
```

---

## 🌍 How to Publish to npm

### 1. Log in to npm

```bash
npm login
```

### 2. Publish the package

```bash
npm publish
```

### 3. Run it globally

```bash
npx giriraj
```

---

## 🌟 Features

* ✨ ASCII Art Title with animated gradients
* 📅 Auto-loaded professional info (Education, Experience)
* 🔧 Full tech stack display with frameworks, tools, and cloud
* 📊 Project showcase with tech breakdown
* ⚖️ Achievements and leadership roles
* ⚖️ System info & developer stats
* 💡 Elegant loading animations using `ora`

---

## 💌 Contact Me

* GitHub: [@giriraj-parsewar](https://github.com/giriraj-parsewar)
* LinkedIn: [giriraj-parsewar](https://linkedin.com/in/giriraj-parsewar)
* Email: [girirajparsewar61@gmail.com](mailto:girirajparsewar61@gmail.com)


---

Made with ❤️ and JavaScript magic by Giriraj Parsewar
