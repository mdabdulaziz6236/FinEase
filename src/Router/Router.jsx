import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import ResetPassword from "../Pages/Auth/ResetPassword";
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import AddTransaction from "../Pages/AddTransaction/AddTransaction";
import MyTransactions from "../Pages/MyTransactions/MyTransactions";
import Reports from "../Pages/Reports/Reports";
import TransactionDetails from "../Pages/TransactionDetails/TransactionDetails";
import UpdateTransaction from "../Pages/UpdateTransaction/UpdateTransaction";
import PrivetRoutes from "./PrivetRoutes";
import ErrorPage from "../Pages/ErrorPgae/ErrorPage";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/resetPassword",
        Component: ResetPassword,
      },
      {
        path: "/profile",
        element: (
          <PrivetRoutes>
            <Profile></Profile>,
          </PrivetRoutes>
        ),
      },
      {
        path: "/update-profile",
         element: (
          <PrivetRoutes>
           <UpdateProfile></UpdateProfile>
          </PrivetRoutes>
        ),
        
      },
      {
        path: "/add-transaction",
        element:<PrivetRoutes>
          <AddTransaction></AddTransaction>
        </PrivetRoutes>
      },
      {
        path: "/my-transaction",
        element:<PrivetRoutes>
          <MyTransactions></MyTransactions>
        </PrivetRoutes>
      },
      {
        path: "/reports",
       element:<PrivetRoutes>
        <Reports></Reports>
       </PrivetRoutes>
      },
      {
        path: "/transactionDetails/:id",
        element:<PrivetRoutes>
          <TransactionDetails></TransactionDetails>
        </PrivetRoutes>
      },
      {
        path: "/transaction/update/:id",
        element:<PrivetRoutes>
          <UpdateTransaction></UpdateTransaction>
        </PrivetRoutes>
      },{
        path:'/*',
        Component:ErrorPage,
      }
    ],
  },
]);
