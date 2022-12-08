import { Outlet } from "react-router-dom";
import Navbar from "../components/_navbar";
import '/src/assets/css/App.css';

export default function Layout () {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
};

