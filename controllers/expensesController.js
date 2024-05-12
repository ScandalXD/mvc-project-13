const path = require('path');
const Expense = require('../models/expense');
const fs = require('fs');
const DATA_FILE = path.join(__dirname, '../data/expenses.json');

let expenses = loadExpenses();
let availableIds = [];
let nextId = expenses.length ? expenses[expenses.length - 1].id + 1 : 1;



function loadExpenses() {
  try {
      if (!fs.existsSync(DATA_FILE)) {
          fs.writeFileSync(DATA_FILE, JSON.stringify([])); 
          return [];
      }
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(data || '[]'); 
  } catch (error) {
      console.error("Could not load expenses:", error);
      return [];
  }
}



function saveExpenses(expenses) {
  try {
      fs.writeFileSync(DATA_FILE, JSON.stringify(expenses, null, 2)); 
  } catch (error) {
      console.error("Could not save expenses:", error);
  }
}


function addExpense(category, amount, date) {
  let id;
  if (availableIds.length > 0) {
    id = availableIds.shift(); 
  } else {
    id = nextId++;
  }
  const expense = new Expense(id, category, amount, date);
  expenses.push(expense);
  saveExpenses(expenses);
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
  saveExpenses(expenses);
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
