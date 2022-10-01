import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Frontend from "./Frontend";
import Auth from "./Auth";
import Dashboard from "./Dashboard";

// Private Route

import PrivateRoute from "../important/PrivateRoute";

import { useSelector } from "react-redux";
import { Navbar } from "./../common/navbar/Navbar";

/// Adding Colors

import { colors } from "../common/Color";
import { useDispatch } from "react-redux";
import { addColor } from "../reducers/userReducer";
import TopBar from "../common/topBar/TopBar";
import Footer from "../common/footer/Footer";

export default function Index() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    dispatch(addColor(colors));
  }, []);

  return (
    <BrowserRouter>
      <header>
        <TopBar />
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<Frontend />} />
          <Route
            path="/auth/*"
            element={<Auth isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/dashboard/*"
            element={<PrivateRoute MyComponent={Dashboard} />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
