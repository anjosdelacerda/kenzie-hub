import { Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import Home from "../pages/home";

import { useState, useEffect } from "react";

function Routes() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@kenzieHub:home");

    if (token) {
      setLogged(true);
    }
  }, [logged]);

  return (
    <Switch>
      <Route exact path="/">
        <Login logged={logged} setLogged={setLogged} />
      </Route>
      <Route exact path="/cadastro">
        <Cadastro logged={logged} />
      </Route>
      <Route exact path="/home">
        <Home logged={logged} />
      </Route>
    </Switch>
  );
}

export default Routes;
