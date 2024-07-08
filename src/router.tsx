import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./_pages/Homepage";
import Detailpage from "./_pages/DetailPage";

const router = createBrowserRouter ([
    {
        path: "/home",
        element: <HomePage/>
    },
    {
        path: "/home/:name",
        element: <Detailpage/>
    },
    {
        path: "",
        element: <Navigate to="/home" replace/>
    }
])

export default router;