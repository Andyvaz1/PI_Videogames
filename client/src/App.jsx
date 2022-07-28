import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Land } from "./land";
import { Home } from "./home";
function App() {
    return (
        <div>
            <Switch>
                <Route path="/" exact render={() => <Land />} />
                <Route path="/home" exact render={() => <Home />} />
            </Switch>
        </div>
    );
}

export default App;
