import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/default";
import Homepage from "../pages/homepage";
import SearchResult from "../pages/searchResult"


const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path:"/result",
                element: <SearchResult/>,
            },

        ],
    },
]);

export default router;