"use client"

import CurrentProject from "./CurrentProject";
import { projectType } from "@/utils/type";

type PropsType = {
    projects: projectType;
}

export default function AllProject({projects}: PropsType) {
    return (
        <div className="main-container py-[4rem] md:py-[6rem] lg:py-[10rem]">
            <div className="mx-auto">
                <CurrentProject projects={projects} />
            </div>
        </div>
    )
}
