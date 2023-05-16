import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/default";
import Homepage from "../pages/homepage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
        ],
    },
]);

export default router;