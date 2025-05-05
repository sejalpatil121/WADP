const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://127.0.0.1:27017/employeesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const employeeSchema = new mongoose.Schema({
    name: String,
    department: String,
    designation: String,
    salary: Number,
    joiningDate: String
});

const Employee = mongoose.model('Employee', employeeSchema);

// Add new employee
app.post('/add', async (req, res) => {
    const emp = new Employee(req.body);
    await emp.save();
    res.redirect('/');
});

// Get all employees
app.get('/employees', async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});

// Update employee
app.post('/update/:id', async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
});

// ✅ Delete employee using DELETE method
app.delete('/delete/:id', async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: 'Employee deleted successfully' });
});

// Start server
app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});
