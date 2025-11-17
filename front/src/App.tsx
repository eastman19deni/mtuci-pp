/*import './App.css'
import MediaQueryImage from './components/MediaQueryImage';
import Tabs from './components/Tabs';

function App() {

  return (
    <>
      <header className="header">
        <div className="logo"><img src="/images/mtuci.jpg "alt="mtuci" /></div>
        <nav className="nav">
          <Tabs />
        </nav>
        <div className="login"><a href="#login" className='link-login'>Login</a></div>
      </header>

      <main>
       <MediaQueryImage /> 
      </main>
    </>
  )
}

export default App
*/
// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;