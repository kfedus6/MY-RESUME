import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'

const SkillsItem = forwardRef(({ skill }, ref) => (
    <div ref={ref} className={
        skill.rating === 1 ? "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-red-500 from-10% to-white to-10% relative" :
            skill.rating === 2 ? "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-red-500 from-20% to-white to-10% relative" :
                skill.rating === 3 ? "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-red-500 from-30% to-white to-10% relative" :
                    skill.rating === 4 ? "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-red-500 from-40% to-white to-10% relative" :
                        skill.rating === 5 ? "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-yellow-400 from-50% to-white to-10% relative" :
                            skill.rating === 6 ? "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-yellow-400 from-60% to-white to-10% relative" :
                                skill.rating === 7 ? "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-yellow-400 from-70% to-white to-10% relative" :
                                    skill.rating === 8 ? "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-green-400 from-80% to-white to-10% relative" :
                                        skill.rating === 9 ? "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-green-400 from-90% to-white to-10% relative" :
                                            "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-green-400 from-100% to-white to-10% relative"
    } >
        <img src={`http://127.0.0.1:5000/${skill.image}`} alt={skill.title} />
        <span className="font-bold cursor-default">{skill.title}</span>
        <div className="opacity-0 hover:opacity-100 absolute top-0 left-0 text-sm font-bold cursor-default p-1 w-40 h-28 transform ease-out duration-300">{skill.rating} / 10</div>
    </div>
))

export default motion(SkillsItem)