import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import ProfilePage from "./pages/profile"
import './styles/global.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  )
}

export default App
