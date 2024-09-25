import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import Home from "../pages/main/Home";
// import About from "../pages/main/About";
import TramsAndCondition from "../pages/main/TramsAndCondition";
import Foods from "../pages/main/Foods";
import NotFound from "../pages/NotFound";
import Food from "../pages/main/Food";
import Deshboard from "../layouts/deshboard/Deshboard";
import DeshboardHome from "../pages/deshboard/DeshboardHome";
import AddMenu from "../pages/deshboard/AddMenu";
import Earning from "../pages/deshboard/Earning";
import OrderDetails from "../pages/deshboard/OrderDetails";
import Auth from "../layouts/auth/Auth";
import LogIn from "../pages/auth/LogIn";
import ForgetPassword from "../pages/auth/ForgetPassword";
import OtpVerify from "../pages/auth/OtpVerify";
import SignUp from "../pages/auth/SignUp";
import Reset from "../pages/auth/Reset";
import BookTable from "../pages/main/BookTable";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/table-booking',
                element: <BookTable />
            },
            {
                path: '/foods',
                element: <Foods />
            },
            {
                path: '/food/:id',
               loader: ()=> fetch('/fake.json'),
                // loader: ({params}) => fetch(`/public/fake.json/${params.id}`),
                element: <Food/>
            },
            {
                path: '/TramsAndCondition',
                element: <TramsAndCondition />
            }
        ]
    },
    // deshboard
    {
        path: "/deshboard",
        element: <Deshboard />,
        children: [
            {
                path: "deshboard",
                element: <DeshboardHome />
            },
            {
                path: "addmenu",
                element: <AddMenu />
            },
            {
                path: "earning",
                element: <Earning />
            },
            {
                path: "orderdetails",
                element: <OrderDetails />
            }
        ]
    },
    // auth
    {
        path: "/auth",
        element: <Auth />,
        children: [
            {
                path: "login",
                element: <LogIn />
            },
            {
                path: "forget-password",
                element: <ForgetPassword />
            },
            {
                path: "otp-verify",
                element: <OtpVerify />
            },
            {
                path: "signup",
                element: <SignUp />
            },
            {
                path: "reset-password",
                element: <Reset />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    },

]);

export default router;






{/* <nav className='flex items-center justify-between container py-8'>
<div>
  <Link to="/home" >
    <img src={logo} alt="" />
  </Link>
</div>
<ul className='flex gap-8'>
  <li>
    <Link to="/home">Home</Link>
  </li>
  <li>
    <Link to="/foods">Foods</Link>
  </li >
  <li >
    <Link to="/about">About</Link>
  </li >
  <li >
    <Link to="/auth/login">Log In</Link>
  </li >
</ul >
</nav > */}

