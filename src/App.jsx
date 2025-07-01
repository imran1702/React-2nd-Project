import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./components/pages/Home"
import ProductDetails from "./components/pages/ProductDetails"
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import CategoryPage from "./components/CategoryPage";
import Header from "./components/Header";
import Menu from "./components/Menu";


let link = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/:category" element={<CategoryPage />} />
    {/* <Route path="/product/:id" element={<ProductDetails></ProductDetails>}></Route> */}
  </Route>
))


function App() {
  let cartItems = useSelector((state)=> state.cartItemCount.value)
  
  
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <RouterProvider router={link}></RouterProvider>
      <div className="cartShow" style={{position: "fixed", right:"20px", bottom:"30px"}}>
        <i style={{fontSize:"50px", cursor:"pointer"}}><IoCartOutline /></i>
        <small style={{position:"absolute", top:"0", right:"0", fontSize:"30px"}}>{cartItems}</small>
      </div>
    </>
  )
}

export default App
