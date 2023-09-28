import React from "react";
import Product from "./components/product/product";
import Contact from "./components/contactus/contactus";
import Pricing from "./components/pricing/pricing";
import Enterprise from "./components/enterprise/enterprise";
import { Route, Routes } from "react-router-dom";

export default function Body() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Product />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/enterprise" element={<Enterprise />} />
            </Routes>
        </div>
    )
}