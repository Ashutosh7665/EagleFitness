// controllers/formController.js
const Form = require('../model/form');

// Handler to get all forms
exports.getAllForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch forms', details: error.message });
  }
};

// Handler to submit a form
exports.submitForm = async (req, res) => {
  // Add validation if needed
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).json({ message: 'Form submitted successfully', data: newForm });
  } catch (error) {
    res.status(400).json({ error: 'Failed to submit form', details: error.message });
  }
};
