import {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {
  Switch,
  Route
} from "react-router-dom";

import styles from "./App.css";

import Nav from "./components/nav.js";
import Footer from "./components/footer.js";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Work from "./pages/work.js";
import Contact from "./pages/contact.js";


function App() {
  
  const [activePage, setActivePage] = useState()
  const [activeTracker, setActiveTracker] = useState()

  function updatePage(page){
    if(page === 'home'){setActiveTracker('0%')}
    if(page === 'about'){setActiveTracker('25%')}
    if(page === 'work'){setActiveTracker('50%')}
    if(page === 'contact'){setActiveTracker('75%')}
    setActivePage(page)
  }
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
      <Footer />
    </section>
  );
}

export default App;