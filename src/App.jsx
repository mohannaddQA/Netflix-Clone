import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/home/Home";
import FavMovies from "./components/FavMovies/FavMovies";

export default function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <br />
      <br />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favmovies" element={<FavMovies />} />
      </Routes>
    </ChakraProvider>
  );
}
