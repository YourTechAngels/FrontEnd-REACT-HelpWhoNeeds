import React, {useState} from "react";
import "./App.css";
import AppNavBar from "./components/structure/AppNavBar"
import Landing from "./components/landing/Landing"
import About from "./components/landing/About"
import Contact from "./components/landing/Contact"
import Footer from "./components/structure/Footer"
import SignIn from "./components/login/SignIn"
import Registration  from "./components/registration/Registration"
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom"
import './App.css'
import { Context } from "./components/Context";

function App() {
    const [context, setContext] = useState("");
    return (
        <Router>
            <Context.Provider value={[context, setContext]}>
            <div className="App">
                <AppNavBar />
                <div className="AppContent">
                <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/login/:userType">
                    <SignIn />
                </Route>      
                <Route path="/registration">
                    <Registration />
                </Route>                       
                </Switch>
                </div> 
                <Footer />
            </div>
            </Context.Provider>
        </Router>
    );
}

export default App;
