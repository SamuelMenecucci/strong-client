import ReactModal from "react-modal";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Feedback } from "./components/Feedback";
import { Presentation } from "./components/Presentation";
import { Vacancy } from "./components/Vacancy";
import { RequestsProvider } from "./contexts/useRequests";
import { Layout } from "./layout";
import { GlobalStyle } from "./styles/global";

ReactModal.setAppElement("#root");

export function App() {
  const currentPage = window.location.pathname;

  currentPage === "/" && (window.location.href = "/home");

  return (
    <RequestsProvider>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path="/home" exact component={Presentation} />
            <Route path="/feedbacks" exact component={Feedback} />
            <Route path="/vacancies" exact component={Vacancy} />
            <Route path="/aboutUs" exact>
              <Presentation title="Somos assim, como você" img="criadoresImg" />
            </Route>
          </Layout>
        </Switch>
      </BrowserRouter>

      <GlobalStyle />
      <Toaster />
    </RequestsProvider>
  );
}
