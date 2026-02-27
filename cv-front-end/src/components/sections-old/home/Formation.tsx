"use client";
import Tag from "@/components/ui/tag/Tag";
import Typography from "@/components/ui/typographies/Typography";
import { FormationType } from "@/utils/type";
import { motion } from "framer-motion"

type PropsType = {
    formations: FormationType[];
}

export default function Formation({formations}: PropsType) {
    return (
        <div className="main-container py-[6rem] md:py-[10rem]">
            <div className="relative">
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: [50, -10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut", }}
                >
                    <Typography
                        label={'Formation'}
                        variant='heading'
                        weight={800}
                        color={'dark-400'}
                        as='span'
                        className="opacity-30"
                    />
                </motion.p>
                <div className="absolute bottom-[0.5rem] sm:bottom-10 left-10 sm:left-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, x: [50, -10, 0] }}
                        transition={{ duration: 1.5, ease: "easeInOut", }}
                    >
                        <Typography
                            label={'et éducation'}
                            variant='h1'
                            weight={800}
                            color={'white'}
                            as='span'
                        />
                    </motion.div>
                </div>
            </div>
            <div className="mt-[4rem] space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        formations?.map((formation, idx) =>(
                            <div key={idx} className="p-20 rounded-[1.4rem] bg-dark-400/10 group">
                                <Tag
                                    size={'lg'}
                                    label={`${formation?.year}`}
                                />
                                <div className="block mt-[2rem]">
                                    <Typography
                                        label={`${formation?.school} - ${formation?.diploma}`}
                                        variant='md'
                                        weight={400}
                                        color={'white'}
                                        as='span'
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}