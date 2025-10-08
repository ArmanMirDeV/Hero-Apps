import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import Error404 from "../Pages/Error404";
import Installation from "../Pages/Installation";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 /> ,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/apps",
        element: <Apps />
      },
      {
        path: "/installation",
        element: <Installation />
      },


      
    ]
  },
]);


export default router