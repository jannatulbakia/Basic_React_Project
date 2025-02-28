import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Error from "../Pages/Error/Error";
import FetchData from "../Pages/Fetch/FetchData";
import ToDoData from "../Pages/ToDo/ToDoData";
import PhotosData from "../Pages/Photos/PhotosData";
import UserData from "../Pages/User/UserData";
import FeatchBooks from "../Pages/FeatchBooks/FeatchBooks";



export const router = createBrowserRouter([
    {
        path :"/",
        element: <MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/fetch",
                element:<FetchData/>
            },
            {
                path:"/fetchbooks",
                element:<FeatchBooks/>
            },
            {
                path:"/todo",
                element:<ToDoData/>
            },
            {
                path:"/photo",
                element:<PhotosData/>
            },
            {
                path:"/user",
                element:<UserData/>
            },
           
            {
                path:"*",
                element:<Error/>
                
            }
        ]
    }
])