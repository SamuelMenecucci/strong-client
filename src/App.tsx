import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Feedbacks } from "./pages/Feedbacks";

import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";

export function App() {
  const currentPage = window.location.pathname;

  currentPage === "/" && (window.location.href = "/home");

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/feedbacks" exact component={Feedbacks} />
        </Switch>
      </BrowserRouter>

      <GlobalStyle />
    </>
  );
}
