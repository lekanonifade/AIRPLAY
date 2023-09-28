import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {

    const navLinkStyles = ({isActive}) => {
        return {
            background: isActive ? "#D26709" : "transparent",
            color: isActive ? "white" : "black"
        }
    }

    return (
        <div className="flex justify-between p-5 px-10 bg-white w-full sticky top-0">
            <div>
                <p className="font-bold text-lg text-[#D26709] py-1 px-2">airplay.</p>
            </div>
            <nav className="flex gap-5">
                <NavLink style={navLinkStyles} className="py-1 px-2 rounded" to="/">Product</NavLink >
                <NavLink style={navLinkStyles} className="py-1 px-2 rounded" to="/contact-us">Contact Us</NavLink >
                <NavLink style={navLinkStyles} className="py-1 px-2 rounded" to="/pricing">Pricing</NavLink >
                <NavLink style={navLinkStyles} className="py-1 px-2 rounded" to="/enterprise">Enterprise</NavLink >
            </nav>
            <div className="flex gap-5">
                <button className="py-1 px-2 rounded">Sign In</button>
                <button className="py-1 px-2 rounded border border-black">Sign Up</button>
            </div>
        </div>
    )
}