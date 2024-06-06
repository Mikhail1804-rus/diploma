import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Laoyut/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import "./styles/index.scss"
import Courses from "./pages/Courses/Courses.jsx";
import Teachers from "./pages/Teachers/Teachers.jsx";
import Timesheet from "./pages/TImesheet/Timesheet.jsx";

const router = createBrowserRouter([
    {
        path: '',
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home/>,
            },
            {
                path: "/contacts",
                element: <Contacts/>,
            },
            {
                path: "/courses",
                element: <Courses/>,
            },
            {
                path: "/teachers",
                element: <Teachers/>,
            },
            {
                path: "/timesheet",
                element: <Timesheet/>,
            },
        ]
    },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
