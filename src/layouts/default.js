import React from "react";
import { Outlet } from "react-router-dom";
import NavbarTop from "../components/global/navbarTop";

const DefaultLayout = () => {
    return (
        <div className="flex flex-col w-full min-h-screen h-full">
            <NavbarTop />
            <Outlet />
        </div>
    );
}

export default DefaultLayout;