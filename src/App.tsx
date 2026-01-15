import { Routes, Route } from 'react-router-dom'
import TopBar from './TopBar'
import InputPage from './InputPage'
import DonePage from './DonePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<TopBar />}>
        <Route index element={<InputPage />} />
        <Route path="activated" element={<DonePage />} />
      </Route>
    </Routes>
  )
}

export default App
