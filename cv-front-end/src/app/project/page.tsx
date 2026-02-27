"use client";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import AllProject from "@/components/sections/project/AllProject";
import Hero from "@/components/sections/project/Hero";
import connectedClient from "@/utils/axios";
import { projectType } from "@/utils/type";
import { useEffect, useState } from "react";

export default function Project() {
    const [projects, setProjects] = useState<projectType>([])

    useEffect(() =>{
        connectedClient.get('/projects/')
        .then((res: any) => {
            setProjects(res.data)
        })
        .catch((err: Error) =>{
            console.error(err)
        })
    }, [])

    return (
        <div>
            <Navbar />
            <Hero />
            <AllProject projects={projects} />
        </div>
    )
} 