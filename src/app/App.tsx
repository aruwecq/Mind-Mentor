import { RouterProvider } from "react-router-dom"
import myRouter from "./router"
export function App() {
  return (
    <div>
      <RouterProvider router={myRouter} />
    </div>
  )
}
