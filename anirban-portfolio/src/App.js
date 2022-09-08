import React from 'react';
import Navbar from './components/Navbar';
import './styles/App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Work from './screens/Work'
import Contact from './screens/Contact'

function App() {
    return (
        <>
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/work" element={<Work/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
