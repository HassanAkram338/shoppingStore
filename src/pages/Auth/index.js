import React,{useState} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./Register/Register";
import SignIn from "./SignIn/SignIn";
import Reset from "./Reset/Reset";

export default function index(props) {

  const {isAuthenticated} = props
  // console.log(isAuthenticated);


  return (
    <Routes>
      <Route path="/">
        <Route index element={<Register />} />
        <Route path="signIn" element={!isAuthenticated ? <SignIn/> : <Navigate to='/'/>}  />
        <Route path="Reset" element={<Reset />} />
      </Route>
    </Routes>
  );
}
