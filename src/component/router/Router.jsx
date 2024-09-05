import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../ErrorPage";
import Home from "../home/Home";
import AddBlog from "../addBlog/AddBlog";
import AllBlog from "../allBlog/AllBlog";
import FeaturedBlog from "../featured/FeaturedBlog";
import WishList from "../wishlist/WishList";
import Login from "../Login";
import Register from "../Register";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
         path:"/",
         element:<Home></Home>
        },
        {
          path:"/addBlog",
          element:<AddBlog></AddBlog>
        },
        {
          path:"/allBlog",
          element:<AllBlog></AllBlog>
        },
        {
          path:"/featured",
          element:<FeaturedBlog></FeaturedBlog>
        },
        {
          path:"/wish",
          element:<WishList></WishList>
        },
       {
         path:"/login",
         element:<Login></Login>
       },
       {
        path:"/register",
        element:<Register></Register>
       }
      ],
    },
  ]);
  export default router;