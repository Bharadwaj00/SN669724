import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <nav className=" navbar navbar-expand-lg navbar-light bg-light">
            <div className="container d-flex">
                <a className="navbar-brand mt-0 " href="/">
                    <img src="https://img.icons8.com/color/2x/bootstrap.png" alt="logo" /> 
                    <span className='logo_text'> Media Library</span>
                </a>

                <button className="navbar-toggler d-lg-none float-end" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <img src="img/Hamburger_icon.svg.png" alt='humburger'/>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
                    <ul className="navbar-nav d-flex">
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold px-4" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link fw-semibold px-4" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link fw-semibold px-4" to="/contact">Contact</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
      </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
