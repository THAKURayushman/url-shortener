import React from "react";
import HomePage from "./pages/HomePage";
import LoginForm from "./components/LoginForm";
import AuthPage from "./pages/AuthPage";
import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/NavBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login } from "./store/slice/authSlice";

const RootLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser && storedUser !== "undefined") {
    dispatch(login(JSON.parse(storedUser)));
  }
}, [dispatch]);


  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
