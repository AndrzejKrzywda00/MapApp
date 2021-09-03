import './App.css';
import Layout from "./Containers/Layout";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PathFinding from "./pages/PathFinding";
import NetworkFlow from "./pages/NetworkFlow";
import About from "./pages/About";
import Home from "./pages/Home";
import TravelingSalesmanProblem from "./pages/TravelingSalesmanProblem";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path={"/path-finding"}>
              <PathFinding/>
            </Route>
            <Route path={"/network-flow"}>
              <NetworkFlow/>
            </Route>
            <Route path={"/traveling-salesman-problem"}>
              <TravelingSalesmanProblem/>
            </Route>
            <Route path={"/about"}>
              <About/>
            </Route>
            <Route path={"/"}>
              <Home/>
            </Route>
          </Switch>
        </Layout>
      </Router>

    </div>
  );
}

export default App;
