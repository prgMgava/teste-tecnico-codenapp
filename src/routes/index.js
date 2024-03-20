import { Route, Switch } from "react-router-dom";
import SignUp from "../pages/Signup";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <SignUp />
      </Route>
    </Switch>
  );
};

export default Routes;
