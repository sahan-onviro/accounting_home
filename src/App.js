import React from "react";
import Home from "./Pages/Home";
import Navbar from "./components/Global/Navbar";
import { Routes, Route } from "react-router-dom";

export const routeData = [
  {
    title: "Home",
    element: <Home />,
    path: "/",
  },
  {
    title: "Feature",
    element: '',
    path: "/feature",
  },
  {
    title: "Blog",
    element: '',
    path: "/blog",
  },
];

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {routeData.map((item, index) => (
          <Route path={item.path} element={item.element} key={index} />
        ))}
      </Routes>
    </>
  );
}

export default App;
