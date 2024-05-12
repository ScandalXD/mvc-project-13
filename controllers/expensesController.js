const Expense = require('../models/expense');
const fs = require('fs');
const path = './data/expenses.json'; 

let expenses = loadExpenses();
let nextId = 1;
let availableIds = [];

function addExpense(category, amount, date) {
  let id;
  if (availableIds.length > 0) {
    id = availableIds.shift(); 
  } else {
    id = nextId++;
  }
  const expense = new Expense(id, category, amount, date);
  expenses.push(expense);
}

function getExpenses() {
  return expenses;
}

function findExpenseById(id) {
  return expenses.find(exp => exp.id === id);
}

function updateExpense(id, category, amount, date) {
  const expense = findExpenseById(id);
  if (expense) {
    expense.category = category;
    expense.amount = amount;
    expense.date = new Date(date);
  }
}

function deleteExpense(id) {
  const index = expenses.findIndex(exp => exp.id === id);
  if (index === -1) return; 

  expenses.splice(index, 1);

  if (index < expenses.length) {
      expenses[index].id = id;
      for (let i = index; i < expenses.length; i++) {
          expenses[i].id = i + 1; 
      }
      nextId = expenses.length + 1; 
  } else {
      nextId = id; 
  }
}


function getExpenseReport() {
  let reportData = {};
  expenses.forEach(expense => {
      if (reportData[expense.category]) {
          reportData[expense.category] += parseFloat(expense.amount);
      } else {
          reportData[expense.category] = parseFloat(expense.amount);
      }
  });
  return reportData;
}


function saveExpenses(expenses) {
  fs.writeFile(path, JSON.stringify(expenses), (err) => {
      if (err) {
          console.error('Błąd zapisu danych:', err);
      }
  });
}

function loadExpenses() {
    try {
        if (!fs.existsSync(path)) {
            return []; 
        }
        let rawData = fs.readFileSync(path, 'utf8');
        if (!rawData.trim()) {
            return [];
        }
        return JSON.parse(rawData);
    } catch (err) {
        console.error('Błąd odczytu danych:', err);
        return [];
    }
}


module.exports = {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
  getExpenseReport,
  findExpenseById,
  saveExpenses,
  loadExpenses
};
