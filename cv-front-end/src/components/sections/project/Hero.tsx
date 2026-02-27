"use client"

import Typography from "@/components/ui/typographies/Typography"
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <div className="main-container py-[4rem] md:py-[6rem] lg:py-[10rem]">
            <div className="flex flex-col space-y-8 max-w-[60rem] mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: [20, -10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut", }}
                >
                    <Typography
                        label='Projects'
                        variant='h1'
                        weight={500}
                        color={'white'}
                        as='span'
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: [-20, 10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut", }}
                >
                    <Typography
                        label="Explore my professional achievements here, where each project demonstrates my expertise and passion for excellence in a variety of fields."
                        variant='base'
                        weight={500}
                        color={'dark-400'}
                        as='span'
                    />
                </motion.div>
            </div>
        </div>
    )
}