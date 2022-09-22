import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/todo";

function Routes(){
    return(
        <Switch>
        <Route path="/" exact component = {Homepage}/>
        </Switch>
    )
}

export default Routes