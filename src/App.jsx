import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
