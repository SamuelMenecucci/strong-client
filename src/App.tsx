import ReactModal from "react-modal";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RequestsProvider } from "./contexts/useRequests";
import { Feedbacks } from "./pages/Feedbacks";

import { Home } from "./pages/Home";
import { Vacancies } from "./pages/Vacancies";
import { GlobalStyle } from "./styles/global";

ReactModal.setAppElement("#root");

export function App() {
  const currentPage = window.location.pathname;

  currentPage === "/" && (window.location.href = "/home");

  return (
    <RequestsProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/feedbacks" exact component={Feedbacks} />
          <Route path="/vacancies" exact component={Vacancies} />
        </Switch>
      </BrowserRouter>

      <GlobalStyle />
    </RequestsProvider>
  );
}
