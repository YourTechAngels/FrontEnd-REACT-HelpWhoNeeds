import React from "react"
import "./App.css"
import AppNavBar from "./components/structure/AppNavBar"
import Landing from "./components/landing/Landing"
import Footer from "./components/structure/Footer"
import AddTask from "./components/task/AddTask"
import LoginForm from "./components/login/LoginForm"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import AddTask from "./components/task/AddTask"

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/vuln" element={<AddTask />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
