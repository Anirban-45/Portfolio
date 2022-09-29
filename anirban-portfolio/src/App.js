import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import './styles/App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Work from './screens/Work'
import Contact from './screens/Contact'

function App() {
    return (

            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/Portfolio" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/work" element={<Work/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
                <Footer/>
            </Router>

    );
}

export default App;
