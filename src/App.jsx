import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./components/pages/Home"
import ProductDetails from "./components/pages/ProductDetails"


let link = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/ProductDetails.jsx" element={<ProductDetails></ProductDetails>}></Route>
  </Route>
))


function App() {
  
  return (
    <>
      <RouterProvider router={link}></RouterProvider>
    </>
  )
}

export default App
