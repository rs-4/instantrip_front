import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/default";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <div>Hello World!</div>,
            },
        ],
    },
]);

export default router;