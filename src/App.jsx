
import {
  createBrowserRouter,
  RouterProvider,Outlet,Link
} from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";

import About from "./pages/About";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import CategoryProducts from "./components/CategoryProducts";
import Product from "./components/Product";


const Layout = ()=>{
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

function App() {
   
  const router = createBrowserRouter([
    {
      
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/products",
          element: <Products/>,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/cart",
          element: <Cart/>
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/categories/:cata",
          element: <CategoryProducts/>,
        },
        {
          path: '/products/:id',
          element: <Product/>,
        },
        {
          path: "*",
          element: <div> <Link href="/" >goto Home Page </Link>
          </div>,
        },
      ],
    },
  ]);

  return (
    
      <>
        <RouterProvider router={router} />
       </>
  )
}

export default App
