import { Route, Routes } from 'react-router-dom'
import './App.css'
import BaseLayout from './components/layout/BaseLayout'
import Home from './pages/home/Home'

function App() {

  return (
    <>

    <Routes>
      {/* Layout wrapper */}
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
      
    </>
  )
}

export default App
