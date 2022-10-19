import Contact from "../components/Contact/Contact";
import Profile from "../components/Profile/Profile";
import PrivateRotutes from "../PrivateRoutes/PrivateRotutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Booking } = require("../components/Booking/Booking");
const { default: ErrorPage } = require("../components/ErrorPage/ErrorPage");
const { default: Home } = require("../components/Home/Home");
const { default: LogIn } = require("../components/LogIn/LogIn");
const { default: Register } = require("../components/Register/Register");
const { default: Main } = require("../layout/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => {
          return fetch("hotel.json");
        },
        element: <Home></Home>,
      },
      {
        path: "/home",

        element: <Home></Home>,
      },
      {
        path: "/booking",
        element: (
          <PrivateRotutes>
            <Booking></Booking>
          </PrivateRotutes>
        ),
      },
      {
        path: "/about",
        element: <Contact></Contact>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRotutes>
            <Profile></Profile>
          </PrivateRotutes>
        ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;