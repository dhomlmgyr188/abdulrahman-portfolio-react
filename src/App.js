import Header from "./Components/layout/header/Header";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/home/Home.js";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const Main = styled.main`
  padding-top: var(--header-height);
`;

function App() {
  return (
    <>
      <Header />

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;