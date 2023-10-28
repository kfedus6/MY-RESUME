import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { fetchGetPortfolio } from "../../store/reducers/ActionCreators"
import { motion } from "framer-motion"

const Work = () => {
    const dispatch = useAppDispatch()
    const { portfolio }: any = useAppSelector(state => state.portfolioSlice)

    useEffect(() => {
        dispatch(fetchGetPortfolio())
    }, [])

    const animation = {
        hidden: {
            opacity: 0,
        },
        visible: (custom: any) => ({
            opacity: 1,
            transition: { ease: "easeOut", duration: 0.7, delay: custom * 0.2 }
        })
    }

    const animationYMinus = {
        hidden: {
            y: -30,
            opacity: 0,
        },
        visible: (custom: any) => ({
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 0.7, delay: custom * 0.2 }
        })
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            id="worksHome" className="flex justify-center items-center pt-10 pb-20">
            <div className="flex flex-col gap-10 w-10/12">
                <div className="flex flex-col gap-2">
                    <motion.h2 custom={1} variants={animation} className="font-bold text-xl cursor-default">Works</motion.h2>
                    <motion.hr custom={1} variants={animation} />
                    <motion.p custom={1} variants={animationYMinus} className="text-sm cursor-default">Here are some of my works.</motion.p>
                </div>
                <motion.div viewport={{ amount: 0.2, once: true }} custom={2} variants={animation} className="flex flex-wrap gap-5">
                    {portfolio.map((item: any, idx: any) => (
                        <div key={item.id} className="flex flex-col items-center gap-2 transform ease-out duration-300 hover:scale-105">
                            <div className={
                                idx === 0 ? "flex items-center gap-4 bg-gradient-to-r from-sky-300 to-blue-500 pt-7 pb-7 pl-4 pr-4 shadow-xl rounded-lg" :
                                    idx === 1 ? "flex items-center gap-4 bg-gradient-to-r from-slate-800 to-black pt-7 pb-7 pl-4 pr-4 shadow-xl rounded-lg" :
                                        idx === 2 ? "flex items-center gap-4 bg-gradient-to-r from-slate-600 to-slate-800 pt-7 pb-7 pl-4 pr-4 shadow-xl rounded-lg" :
                                            "flex items-center gap-4 bg-gradient-to-r from-slate-200 to-slate-400 pt-7 pb-7 pl-4 pr-4 shadow-xl rounded-lg"
                            }>
                                <a target="_blank" href={item.link}>
                                    <img className="w-80 h-44 rounded-lg" src={`http://127.0.0.1:5000/${item.image}`} alt={item.title} />
                                </a>
                            </div>
                            <div>
                                <span className="font-bold cursor-default">{item.title}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Work