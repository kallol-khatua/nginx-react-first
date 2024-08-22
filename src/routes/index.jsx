import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar/>,
    children: [
      {
        path: "",
        index: true,
        element: <Home desc="Home"/>,
      },
      {
        path: "home",
        element: <Home desc="Home"/>,
      },
      {
        path: "about",
        element: <About desc="About"/>,
      },
      {
        path: "contact",
        element: <Contact desc="Contact"/>,
      },
    ],
  },
]);

export default router;
