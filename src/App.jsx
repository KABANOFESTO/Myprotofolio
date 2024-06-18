import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <br /><br />
          <div className="content">
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
          <br /><br />
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
