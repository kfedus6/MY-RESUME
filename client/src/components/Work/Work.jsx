import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGetPortfolio } from "../../store/reducers/ActionCreators"
import { motion } from "framer-motion"
import WorkItem from "./WorkItem"

const Work = () => {
    const dispatch = useDispatch()
    const { portfolio } = useSelector(state => state.portfolioSlice)

    useEffect(() => {
        dispatch(fetchGetPortfolio())
    }, [])

    const animation = {
        hidden: {
            opacity: 0,
        },
        visible: (custom) => ({
            opacity: 1,
            transition: { ease: "easeOut", duration: 0.7, delay: custom * 0.3 }
        })
    }

    const animationYMinus = {
        hidden: {
            y: -30,
            opacity: 0,
        },
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 0.5, delay: custom * 0.2 }
        })
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            id="worksHome"
            className="flex justify-center items-center pt-20 pb-20">
            <div className="flex flex-col gap-10 w-10/12">
                <div className="flex flex-col gap-2">
                    <motion.h2 custom={1} variants={animation} className="font-bold text-xl cursor-default">Works</motion.h2>
                    <motion.hr custom={1} variants={animation} />
                    <motion.p custom={1} variants={animationYMinus} className="text-sm cursor-default">Here are some of my works.</motion.p>
                </div>
                <div className="flex flex-wrap gap-5">
                    {portfolio.map((item, idx) => (
                        <WorkItem variants={animation} custom={idx + 1} key={idx} item={item} idx={idx} />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Work