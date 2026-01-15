import Counter from './components/Counter'
import './App.css'

function App() {
  return (
    <div className="container">
      <h1>Counters</h1>
      <Counter initialValue={5} />
      <Counter />
    </div>
  )
}

export default App
