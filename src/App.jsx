import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Navbar from "./compoments/Navbar"
function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes b>
          <Route path="/" element={<div>Home</div>}></Route>
          <Route path="/flights" element={<div>Flights</div>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
