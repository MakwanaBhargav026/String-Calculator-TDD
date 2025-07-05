# 🧮 String Calculator TDD Kata

> A fully tested, extensible **String Calculator** built with **Node.js** and **Jest** — built step-by-step using **Test Driven Development (TDD)** principles.  
> 
> 🔬 Focused on robust parsing, smart delimiter handling, and validation.  
> 
> 📦 Lightweight, pure logic — ideal for kata practice and learning TDD.

---

## 📝 **About The Project**

This kata-based project solves the problem of summing numbers from a string with custom rules:

✅ Empty input returns 0  
✅ Support for custom single/multi-character delimiters  
✅ Support for multiple delimiters  
✅ Smart handling of `-` (e.g. `--3` becomes `-3`)  
✅ Throws error on negative numbers  
✅ Ignores numbers > 1000  

---

## 🚀 **Features**

- ✨ **Built step-by-step with TDD**
- ➕ **Handles comma `,` and newline `\n` delimiters**
- 🧩 **Supports custom delimiter with `//[delim]\n` format**
- 🧱 **Allows delimiters of any length** — `//[***]\n1***2***3`
- 🔗 **Multiple delimiters support** — `//[*][%]\n1*2%3`
- 🧠 **Handles tricky cases like `//-\n1--3` as `1 + (-3)`**
- 🚫 **Rejects negative numbers with full list**
- ⛔ **Ignores numbers > 1000**

---

## 🛠 **Technology Stack**

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="60" height="60"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" width="60" height="60"/>
</p>

---

## 📸 **Screenshots**

> Example outputs and test run preview:

![Terminal Tests](https://github.com/MakwanaBhargav026/String-Calculator-TDD/blob/master/photos/img-1.png)  
*✅ All unit tests passing via Jest*

---
