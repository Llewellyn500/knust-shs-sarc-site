import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import HistoryPage from "./pages/history";
import FoundersWordPage from "./pages/foundersword";
import TeamWord from "./pages/teamword"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInPage} exact />
        <Route path="/signup" component={SignUpPage} exact />
        <Route path="/history" component={HistoryPage} exact />
        <Route path="/foundersword" component={FoundersWordPage} exact />
        <Route path="/teamword" component={TeamWord} exact />
      </Switch>
    </Router>
  );
}

export default App;