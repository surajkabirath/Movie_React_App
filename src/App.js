import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trending from "./pages/Trending/Trending";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Search from "./pages/Search/Search";
import SimpleBottomNavigation from "./components/Nav/Nav";
import About from "./pages/About/About";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
        <SimpleBottomNavigation />
      </div>
    </BrowserRouter>
    
  );
};

export default App;
