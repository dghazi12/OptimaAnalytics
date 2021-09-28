import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Sports from "./components/Pages/Sports/Sports";
import Halloween from "./components/Pages/Halloween/Halloween";
import Crypto from "./components/Pages/Crypto/Crypto";
import Dev from "./components/Pages/Development/Development";
import { PostProvider } from "./context/PostContext";

const App = () => {
  return (
    <>
      <PostProvider>
        <Navbar />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/sports" exact>
              <Sports />
            </Route>

            <Route path="/halloween" exact>
              <Halloween />
            </Route>

            <Route path="/crypto" exact>
              <Crypto />
            </Route>

            <Route path="/dev" exact>
              <Dev />
            </Route>
          </Switch>
        </Router>
      </PostProvider>
    </>
  );
};

export default App;
