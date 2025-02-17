
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import NavBar from "./Components/NavBar";
import MatchScoreCard from "./Components/MatchScoreCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />

          <MatchScoreCard />
        


      </div>
    </ThemeProvider>
  );
};

export default App;