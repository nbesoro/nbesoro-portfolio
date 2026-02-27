"use client";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";
import { FaGitlab } from "react-icons/fa6"
import Typography from "../ui/typographies/Typography";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="main-container py-[10rem]">
            <div className="flex items-center justify-center gap-[3rem] text-[2.2rem]">
                <Link href={"https://www.linkedin.com/in/nbe-soro/"} target="_blank">
                    <BsLinkedin className="hover:text-white text-dark-400 transition-all duration-300 ease-linear" />
                </Link>
                <Link href={"https://gitlab.com/Soro08"} target="_blank">
                    <FaGitlab className="hover:text-white text-dark-400 transition-all duration-300 ease-linear" />
                </Link>
                <Link href={"https://github.com/Soro08"} target="_blank">
                    <BsGithub className="hover:text-white text-dark-400 transition-all duration-300 ease-linear" />
                </Link>
                <Link href={"https://www.youtube.com/@nbesoro"} target="_blank">
                    <BsYoutube className="hover:text-white text-dark-400 transition-all duration-300 ease-linear" />
                </Link>
            </div>
            <div className="h-[0.1rem] w-full bg-dark-400/50 my-[4rem]" />
            <div className="text-center">
                <Typography
                    label={`© ${new Date().getFullYear()} nbesoro. All rights reserved.`}
                    variant='md'
                    weight={400}
                    color={'white'}
                    as='span'
                    className="opacity-50"
                />
            </div>
        </div>
    )
}