const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://20618166:yrpassword@cluster0.yh7lhnx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.static('public'));

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Define a schema and model for Todo items
const todoSchema = new mongoose.Schema({
    taskName: {
      type: String,
      required: true
    },
    isCompleted: {
      type: Boolean,
      default: false
    }
});
  
// Define a Mongoose model for Todo items
const Todo = mongoose.model('Todo', todoSchema);

// Route to render the Pug template for the homepage
app.get('/', (req, res) => {
    Todo.find() // Find all todos to display
      .then(todos => {
        res.render('index', { title: 'EasyTodo App', todos: todos });
      })
      .catch(err => {
        console.error('Error retrieving todos:', err);
        res.status(500).send('Error loading tasks.');
      });
  });

// Start listening on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
});

// Route to handle adding new todos
app.post('/todos', (req, res) => {
    const newTodo = new Todo({
      taskName: req.body.taskName
    });
    
    newTodo.save()
      .then(result => {
        console.log('Todo Added:', result);
        res.redirect('/'); // Redirect to the homepage to display all todos
      })
      .catch(err => {
        console.error('Error saving the Todo:', err);
        res.status(500).send("Failed to add Todo.");
      });
});

// Route to handle deleting existing todos
app.delete('/todos/:id', function(req, res){
    Todo.deleteOne({ _id: req.params.id }) // Use deleteOne to remove the todo
      .then(result => {
        if (result.deletedCount === 1) {
          res.json({ message: 'Deleted successfully' }); // Send a JSON response
          res.redirect('/');
        } else {
          res.status(404).json({ error: 'Todo not found' });
        }
      })
      .catch(err => {
        console.error('Failed to delete todo', err);
        res.status(500).json({ error: 'Error deleting task' });
      });
});
