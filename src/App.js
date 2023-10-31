import React from "react";
import Introduction from "./components/Introduction";
import Resume from "./components/Resume";
import Project from "./components/Project";
import CustomNav from "./components/CustomNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <CustomNav/>
      <Introduction/>
      <Resume/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
