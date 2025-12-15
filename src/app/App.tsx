import { RouterProvider } from "react-router-dom"
import { myRouter } from "./router"
import "./index.css"
export function App() {
  return (
    <div>
      <RouterProvider router={myRouter} />
      
    </div>
  )
}
