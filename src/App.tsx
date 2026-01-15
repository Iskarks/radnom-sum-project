import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [taskList, setTaskList] = useState([
    'Buy groceries',
    'Finish homework',
    'Call mom',
    'Read a book',
    'Go for a walk'
  ])
  const [searchText, setSearchText] = useState('')
  const [newTaskText, setNewTaskText] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const addInputRef = useRef<HTMLInputElement>(null)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  const handleClearButton = () => {
    setSearchText('')
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(event.target.value)
  }

  const handleAddButton = () => {
    if (newTaskText.trim() !== '') {
      setTaskList([...taskList, newTaskText])
      setNewTaskText('')
      if (addInputRef.current) {
        addInputRef.current.focus()
      }
    }
  }

  const filteredTasks = taskList.filter((task) => {
    return task.includes(searchText)
  })

  return (
    <div className="container">
      <h1>My Tasks</h1>
      <div className="addBox">
        <input
          type="text"
          value={newTaskText}
          onChange={handleNewTaskChange}
          ref={addInputRef}
          placeholder="Add new task..."
          className="addInput"
        />
        <button onClick={handleAddButton} className="addButton">
          Add
        </button>
      </div>
      <div className="searchBox">
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          ref={inputRef}
          placeholder="Search tasks..."
          className="searchInput"
        />
        <button onClick={handleClearButton} className="clearButton">
          Clear
        </button>
      </div>
      <ul className="taskList">
        {filteredTasks.map((task, index) => (
          <li key={index} className="taskItem">
            {task}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
