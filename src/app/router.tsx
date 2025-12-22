import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../widgets/Layout/Layout";
import { Router } from "../pages/Router";
import Baner from "../pages/landing/ui/Baner/Baner";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
       path: "banner",
       element: <Baner
       />
      },
    ],
  },
  Router,
]
);

