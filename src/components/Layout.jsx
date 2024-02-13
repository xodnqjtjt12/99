import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
    return (
        <main
            style={{
                height: "100vh",
                maxWidth: "390px",
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "pink",
            }}
        >
            <Outlet />
            <Navbar />
        </main>
    );
}

export default Layout;
