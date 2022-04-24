import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/About/AboutUs";
import Articles from "./components/Articles/Articles";
import SingleArticle from "./components/Articles/SingleArticle";
import Contact from "./components/Contact/Contact";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import SingleProject from "./components/Projects/SingleProject";

function App() {
  const [active, setActive] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/project"
            element={<Home active={active} setActive={setActive} />}
          />
          <Route
            exact
            path="/aboutus"
            element={<AboutUs active={active} setActive={setActive} />}
          />
          <Route
            exact
            path="/projects"
            element={<Projects active={active} setActive={setActive} />}
          />
          <Route
            exact
            path="/singleproject"
            element={<SingleProject active={active} setActive={setActive} />}
          />
          <Route
            exact
            path="/articles"
            element={<Articles />}
            active={active}
            setActive={setActive}
          />
          <Route
            exact
            path="/singlearticle"
            element={<SingleArticle active={active} setActive={setActive} />}
          />
          <Route
            exact
            path="/contact"
            element={<Contact active={active} setActive={setActive} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
