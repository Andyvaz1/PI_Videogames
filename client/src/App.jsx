import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Land } from "./land";
import { Home } from "./home";
import { NavBar } from "./navBar";
import { GameDetail } from "./gameDetail";
function App(props) {
    return (
        <div>
            <Switch>
                <Route path="/" exact render={() => <Land />} />
            </Switch>
            <Route
                render={({ location }) => {
                    if (location.pathname !== "/") return <NavBar />;
                }}
            />
            <Switch>
                <Route path="/home" exact render={() => <Home />} />
                <Route path="/:id" exact render={() => <GameDetail />} />
            </Switch>
        </div>
    );
}

export default App;
