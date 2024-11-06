import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./src/components/Header";
import Home from "./src/components/Home";
import Footer from "./src/components/Footer";
import Contact from "./src/components/Contact";
import Services from "./src/components/Services";

import "./src/styles/App.scss";
import "./src/styles/header.scss";
import "./src/styles/home.scss";
import "./src/styles/contact.scss";
import "./src/styles/mediaquery.scss";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
