import React from "react"
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";

// import pizzas from './assets/pizzas.json'

import './scss/app.scss';

export function App() {


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
