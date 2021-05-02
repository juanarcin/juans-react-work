import {AnimatePresence} from 'framer-motion';
import {
  Switch,
  Route
} from "react-router-dom";

import styles from "./App.css";

import Nav from "./components/nav.js";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Work from "./pages/work.js";
import Contact from "./pages/contact.js";



function App() {
  return (
    <section className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/contact"><Contact /></Route>
          <Route path="/work">   <Work />   </Route>
          <Route path="/about">  <About />  </Route>
          <Route path="/">       <Home />   </Route>
        </Switch>
      </AnimatePresence>
    </section>
  );
}

export default App;