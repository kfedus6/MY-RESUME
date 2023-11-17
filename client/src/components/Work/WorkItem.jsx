import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'

const WorkItem = forwardRef(({ item, idx }, ref) => (
    <div ref={ref} className="flex flex-col items-center gap-2 transform ease-out duration-300 hover:scale-105">
        <div className={
            idx === 0 ? "flex items-center gap-4 bg-gradient-to-r from-sky-300 to-blue-500 pt-5 pb-5 pl-4 pr-4 shadow-xl rounded-lg" :
                idx === 1 ? "flex items-center gap-4 bg-gradient-to-r from-slate-800 to-black pt-5 pb-5 pl-4 pr-4 shadow-xl rounded-lg" :
                    idx === 2 ? "flex items-center gap-4 bg-gradient-to-r from-slate-600 to-slate-800 pt-5 pb-5 pl-4 pr-4 shadow-xl rounded-lg" :
                        "flex items-center gap-4 bg-gradient-to-r from-slate-200 to-slate-400 pt-5 pb-5 pl-4 pr-4 shadow-xl rounded-lg"
        }>
            <a target="_blank" href={item.link}>
                <img className="w-80 h-44 rounded-lg" src={`http://127.0.0.1:5000/${item.image}`} alt={item.title} />
            </a>
        </div>
        <div>
            <span className="font-bold cursor-default">{item.title}</span>
        </div>
    </div>
))

export default motion(WorkItem)