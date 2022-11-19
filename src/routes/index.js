import Home from "../pages/page.js";
import About from "../pages/about/page.js";

const routes = [
    {
        path: "/",
        controller: Home
    },
    {
        path: "/about",
        controller: About
    }
]

export default routes;