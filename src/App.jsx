import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import { createTheme, ThemeProvider } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  const customTheme = createTheme({
    palette: {
      secondary: {
        main: '#25A8CC',
      },
    },
  })

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Router>
          <Navigation />
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
