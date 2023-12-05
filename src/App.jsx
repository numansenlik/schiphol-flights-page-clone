import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Navbar from "./compoments/Navbar"
import Flights from "./compoments/pages/flights/Flights"
function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<div>Home</div>}></Route>
          <Route path="/flights" element={<Flights/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
