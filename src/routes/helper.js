import Login from "pages/auth/login";
import Signup from "pages/auth/sign-up";
// import Resetpassword from "pages/auth/reset-password";
import Forgotpassword from "pages/auth/forgot-password";

// Private
// import Home from "pages/home";
// import Profile from "pages/profile";

export const authRoute = [
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/signup",
    component: <Signup />,
  },
  // {
  //   path: "/reset-password",
  //   component: <Resetpassword />,
  // },
  {
    path: "/forgot-password",
    component: <Forgotpassword />,
  },
];

export const privateRoute = [
  // {
  //   path: "/",
  //   component: <Home />,
  // },
  // {
  //   path: "/profile",
  //   component: <Profile />,
  // },
];
