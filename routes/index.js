const express = require('express');
const router = express.Router();
const expensesController = require('../controllers/expensesController');

router.get('/', (req, res) => {
  res.render('index', { expenses: expensesController.getExpenses() });
});

router.get('/', (req, res) => {
    res.render('index', { expenses: expensesController.getExpenses() });
  });

  router.get('/add', (req, res) => {
    res.render('add');
  });

router.post('/add', (req, res) => {
  expensesController.addExpense(req.body.category, req.body.amount, req.body.date);
  res.redirect('/');
});

router.get('/edit/:id', (req, res) => {
  const expense = expensesController.findExpenseById(parseInt(req.params.id));
  if (expense) {
      res.render('edit', { expense: expense });
  } else {
      res.status(404).send('Wydatek nie znaleziony');
  }
});

router.post('/edit/:id', (req, res) => {
  expensesController.updateExpense(parseInt(req.params.id), req.body.category, req.body.amount, req.body.date);
  res.redirect('/');
});

router.get('/delete/:id', (req, res) => {
  expensesController.deleteExpense(parseInt(req.params.id));
  res.redirect('/');
});

router.get('/report', (req, res) => {
  const reportData = expensesController.getExpenseReport();
  res.render('report', { expenses: reportData });
});






module.exports = router;