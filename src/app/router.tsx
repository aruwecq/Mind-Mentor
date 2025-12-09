import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../widgets/Layout/Layout";
const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
          {

          }
        ]
    }
])
export default myRouter