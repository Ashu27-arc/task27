const { v4: uuidv4 } = require('uuid'); // Unique ID generator
const Task = require('../models/taskModel');

// Controller: Add Task
exports.addTask = (req, res) => {
  const { title, description, dueDate, priority } = req.body;

  if (!title) return res.status(400).json({ error: 'Title is required.' });

  const newTask = {
    id: uuidv4(),
    title,
    description: description || '',
    dueDate: dueDate || null,
    priority: priority || 'medium',
    completed: false,
    createdAt: new Date()
  };

  Task.push(newTask);
  res.status(201).json(newTask);
};

// Controller: Get All Tasks
exports.getAllTasks = async (req, res) => {
  // Implementation will go here
};

// Controller: Get Task by ID
exports.getTaskById = async (req, res) => {
  // Implementation will go here
};

// Controller: Update Task
exports.updateTask = async (req, res) => {
  // Implementation will go here
};

// Controller: Delete Task
exports.deleteTask = async (req, res) => {
  // Implementation will go here
};

// Controller: Mark Task as Completed
exports.markTaskAsCompleted = (req, res) => {
  const task = Task.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found.' });

  task.completed = true;
  res.json({ message: 'Task marked as completed.', task });
};

exports.updateTaskStatus = async (req, res) => {
  // Implementation will go here
};
