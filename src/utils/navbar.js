import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import News from "../components/News/News";

export const navbar = [
  {
    id: 1,
    title: "Main",
    pathname: "/main",
    Element: Home,
    hidden: false,
  },
  {
    id: 2,
    title: "News",
    pathname: "/news",
    Element: News,
    hidden: false,
  },
  {
    id: 3,
    title: "Login",
    pathname: "/login",
    Element: Login,
    hidden: true,
  },
];
