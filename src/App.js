import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import CardContainer from "./components/Card Module/CardContainer";
import Navbar from "./components/Navbar Module/Navbar";
import "./App.scss";

function App() {
    const [kind, setKind] = useState("");
    console.log(kind);
    return (
        <Router>
            <main>
                <Navbar kind={kind} setKind={setKind} />

                <Switch>
                    <Route path="/:id" render={props => <CardContainer {...props} setKind={setKind} />} />
                    <Route>
                        <Redirect to="/All" />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}

export default App;
