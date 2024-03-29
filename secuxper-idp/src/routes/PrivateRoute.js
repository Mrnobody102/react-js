import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../layouts/header/Header";
import { useAuth } from "../providers/AuthProvider";

function PrivateRoute() {
  const user = useAuth();
  // if (!user.token) return <Navigate to="/login"></Navigate>;
  return (
    <>
      <Outlet />
    </>
  );
}

export default PrivateRoute;
