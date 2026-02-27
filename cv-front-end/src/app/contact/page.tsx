"use client";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import Calendar from "@/components/sections/contact/Calendar";
import Hero from "@/components/sections/contact/Hero";

export default function Contact() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Calendar />
        </div>
    )
}