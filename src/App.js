import React from "react";
import "./App.scss";
import { Button } from "carbon-components-react";
import { Content } from "carbon-components-react/lib/components/UIShell";
import ToastHeader from "./components/toastheader";
import { Route, Switch } from "react-router-dom";
import HomePage from "./content/HomePage";
import Login from "./content/Login";

function App() {
  return (
    <>
      <ToastHeader />
      <Content>
        <Button>Button</Button>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
        </Switch>
      </Content>
    </>
  );
}

export default App;
