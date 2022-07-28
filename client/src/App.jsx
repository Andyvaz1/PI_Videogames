import "./App.css";
import { Switch, Route } from "react-router-dom";
import { LandingPage } from "./landingPage";
import { Home } from "./home";
function App() {
    return (
        <div>
            <Switch>
                <Route path="/" exact render={() => <LandingPage />} />
                <Route path="/home" exact render={() => <Home />} />
            </Switch>
        </div>
    );
}

export default App;
