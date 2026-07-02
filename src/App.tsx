import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
