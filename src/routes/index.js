import Cart from "../components/Cart";
import Login from "../components/Login/Login";
import Product from "../components/Product";
import Products from "../components/Products";
import Register from "../components/Register";
import Home from "../pages/Home";

export const publicLoginRegisterRoutes = [
    {path:'/login',component:Login},
    {path:'register',component:Register}
];

export const publicRoutes = [
    {path:'/',component:Home},
    {path:'/products',component:Products},
    {path:'/product',component:Product},
    {path:'/cart',component:Cart}
];