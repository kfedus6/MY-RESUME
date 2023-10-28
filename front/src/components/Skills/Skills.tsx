import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { fetchGetSkills } from "../../store/reducers/ActionCreators"
import { motion } from "framer-motion"

const Skills = () => {
    const dispatch = useAppDispatch()
    const { skills }: any = useAppSelector(state => state.skillsSlice)

    useEffect(() => {
        dispatch(fetchGetSkills())
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
            id="skillsHome" className="flex justify-center items-center pt-20 pb-20">
            <div className="flex flex-col gap-10 w-10/12">
                <div className="flex flex-col gap-2">
                    <motion.h2 custom={1} variants={animation} className="font-bold text-xl cursor-default">My Skills</motion.h2>
                    <motion.hr custom={1} variants={animation} />
                    <motion.p custom={1} variants={animationYMinus} className="text-sm cursor-default">Here are my skills.</motion.p>
                </div>
                <motion.div viewport={{ amount: 0.2, once: true }} custom={2} variants={animation} className="flex flex-wrap gap-4">
                    {skills.map((skill: any) => (
                        <div key={skill.id} className={
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
                    ))}
                </motion.div>
            </div>
        </motion.div >
    )
}

export default Skills