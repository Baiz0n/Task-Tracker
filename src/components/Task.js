import { FaTimes } from 'react-icons/fa'

const DELETE_ICON_STYLE = {
  color: 'red',
  cursor: 'pointer',
}

const Task = ({task, onDelete, onToggle}) => {

  return (
    <div 
      className = {`task ${task.reminder ? 'reminder': '' }`} 
      onDoubleClick = {() => onToggle(task.id)}>
        <h3>
          {task.text} 

          <FaTimes 
            style = {DELETE_ICON_STYLE}
            onClick = {() => onDelete(task.id)}
          />
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task
