import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutComponent from "./components/LayoutComponent";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import StudentLife from "./pages/StudentLife";
import Contact from "./pages/Contact";
import "./sass/main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "academics",
        element: <Academics />,
      },
      {
        path: "admissions",
        element: <Admissions />,
      },
      {
        path: "studentlife",
        element: <StudentLife />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
