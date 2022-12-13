import "./App.css";
import Navbar from "./components/ui/Navbar";
import ResponsiveDrawer from "./components/ui/Sidebar";
import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useRoutes,
} from "react-router-dom";
import { Router } from "./router/Router";


const App = () => {
  const routing = useRoutes(Router);
  return (
    <div>
    {routing}
    </div>
  )
}

export default App

