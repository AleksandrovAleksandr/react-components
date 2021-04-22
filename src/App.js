import TextField from './components/TextField/TextField'

import './App.scss'
const App = () => {
  return (
    <div className="App">
      <TextField
        id={1}
        withClearButton
        placeholder="Введите название вопроса..."
      />
    </div>
  )
}

export default App
