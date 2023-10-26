import React from "react";
import Header from './components/header'
import Home from './components/home1';
import Footer from './components/footer';
import './app.css'
import {
  createBrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Login from "./components/login";
import Booking from "./components/Booking";
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="app-container">
          <Header />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Booking" element={<Booking />} />

            <Route path="/footer" element={<Footer />} />

          </Routes>
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;