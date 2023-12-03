import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Navbar from "./compoments/Navbar"
function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<div>Home</div>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
