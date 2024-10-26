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
import PrivateRoute from "../PrivateRoute";
import BlogDetails from "../BlogDetails";
import Update from "../Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addBlog",
        element: (
          <PrivateRoute>
            <AddBlog></AddBlog>
          </PrivateRoute>
        ),
      },
      {
        path: "/allBlog",
        element: <AllBlog></AllBlog>,
      },
      {
        path: "/featured",
        element: <FeaturedBlog></FeaturedBlog>,
      },
      {
        path: "/wish",
        element: (
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:_id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/developers/${params._id}`),
      },
      {
        path: "/update/:_id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/developers/${params._id}`),
      },
    ],
  },
]);
export default router;
