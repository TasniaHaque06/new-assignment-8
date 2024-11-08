import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Dashboard from "../Dashboard/Dashboard";
import ProductDetail from "../ProductDetail/ProductDetail";
import Category from "../Category/Category";
import Statistics from "../Statistics/Statistics"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />, 
        errorElement:<ErrorPage></ErrorPage>,
        children: [
           {
              path: "/",  
              element: <Home />,
              children:[
               {
                  path:"/",
                  element: <Category></Category>,
                  loader:()=>fetch("../Products.json")
               },
               {
                  path:"/product",
                  element: <Category></Category>,
                  loader:()=>fetch("../Products.json")
               },
               {
                  path:"/products/:category",
                  element: <Category></Category>,
                  loader:()=>fetch("../Products.json")
               },
              ]
           },
           {
              path:"product/:product_id",
              element:<ProductDetail></ProductDetail>,
              loader: ()=> fetch("./Products.json")
           },
           {
              path:"Statistics",
              element: <Statistics></Statistics>
           },
           {
               path:"dashboard",
               element:<Dashboard></Dashboard>
           },
        ],
     },
])
export default routes;