// routes/formRoutes.js
const express = require('express');
const { getAllForms, submitForm } = require('../controller/form');

const router = express.Router();

router.get('/forms', getAllForms); // Route to get all forms
router.post('/join', submitForm); // Route to submit a form

module.exports = router;
