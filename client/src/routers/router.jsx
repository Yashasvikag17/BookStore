

import App from "../App";
import Home from '../home/home.jsx'
import Shop from "../shop/shop";
import Blog from "../component/Blog.jsx";
import About from "../component/About";
import SingleBook from "../component/Singlebook.jsx";
import DashboardLayout from "../dashboard/dashboardLayout";
import AdminDashboard from "../dashboard/AdminDashboard";
// import Uploadbook from "../dashboard/UploadBook";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
import {
    createBrowserRouter
  } from "react-router-dom";
import SignUp from "../component/SignUp";
import Login from "../component/Login";
import Privaterouts from "../home/PrivateRoutes/Privaterouts";
import Logout from "../component/Logout";
// import Uploadook from "../dashboard/Uploadbook";
// import SingleBook from "../component/SingleBook";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
          {
              path :"/",
              element:<Home/>
          },
          {
              path:"/shop",
              element:<Shop/>
          },
          {
              path:"/about",
              element:<About/>
          },
          {
              path:"/blog",
              element:<Blog/>
          },
          {
            path: "/book/:id",
            element: <SingleBook />,
            loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
            
          }
          
      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashboardLayout/>,
      children:[{
        path: "/admin/dashboard",
        element: <Privaterouts><AdminDashboard/></Privaterouts>
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook/>
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBook/>
      },
      {
        path: "/admin/dashboard/edit_books/:id",
        element: <EditBook/>,
        loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
      }
      
      ]
    },{
      path:"/sign-up",
      element: <SignUp/>
    },{
      path:"/login",
      element: <Login/>
    },{
      path:"/logout",
      element:<Logout/>
    }
  ]);
  export default router;