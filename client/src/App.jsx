import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Land } from "./components/land";
import { Home } from "./components/home";
import { NavBar } from "./components/navBar";
import { GameDetail } from "./components/gameDetail";
import { CreateGame } from "./components/createGame";
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
                <Route path="/creategame" exact render={() => <CreateGame />} />
                <Route path="/:id" exact render={() => <GameDetail />} />
            </Switch>
        </div>
    );
}

export default App;
