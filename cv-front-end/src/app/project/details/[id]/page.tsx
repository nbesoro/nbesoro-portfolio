"use client"

import Navbar from "@/components/layouts/Navbar";
import DetailProject from "@/components/sections/project/DetailProject";
import { useParams } from "next/navigation";

export default function DetailIdProject() {
    const params = useParams();
    const slug = params.id as string;

    return (
        <div>
            <Navbar />
            <DetailProject slug={slug} />
        </div>
    )
}
