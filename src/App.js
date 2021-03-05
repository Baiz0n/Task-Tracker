import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: 'Tuesday',
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: 'Today',
      reminder: true,
    },
    {
      id: 3,
      text: "Shopping in the mall",
      day: 'Friday',
      reminder: false
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(
      Math.random() * 10000
    ) +1 

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) =>  {
    setTasks(tasks.filter(
      (task) => task.id !== id
      ))
  }
  
  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(
      (task) => task.id === id ?
      {...task, reminder: !task.reminder} : task
    ))
  }

  return (
    <div className="container">
      <Header 
        onAdd = {() => setShowAddTask(!showAddTask)}
        showAdd = {showAddTask}/>
      {
        showAddTask && <AddTask onAdd = {addTask}/>
      }
      { // a way to hide components conditionally
        tasks.length > 0 ?
        <Tasks 
          tasks = {tasks} 
          onDelete = {deleteTask}
          onToggle = {toggleReminder}
        />
        : 'No Tasks'
      }
    </div>
  );
}

export default App;
