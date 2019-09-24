import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardContainer from "./components/Card Module/CardContainer";
import Navbar from "./components/Navbar Module/Navbar";
import "./App.scss";

function App() {
    const [type, setType] = useState("Sportex");

    return (
        <Router>
            <main>
                <Navbar />

                <Switch>
                    <Route path="/" exact component={CardContainer} />
                    <Route path="/:id" component={CardContainer} />
                </Switch>
            </main>
        </Router>
    );
}

export default App;
