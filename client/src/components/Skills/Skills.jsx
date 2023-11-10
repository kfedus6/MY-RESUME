import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGetSkills } from "../../store/reducers/ActionCreators"
import { motion } from "framer-motion"
import SkillsItem from "./SkillsItem"

const Skills = () => {
    const dispatch = useDispatch()
    const { skills } = useSelector(state => state.skillsSlice)

    useEffect(() => {
        dispatch(fetchGetSkills())
    }, [])

    const animation = {
        hidden: {
            opacity: 0,
        },
        visible: (custom) => ({
            opacity: 1,
            transition: { ease: "easeOut", duration: 0.5, delay: custom * 0.2 }
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
            transition: { ease: "easeOut", duration: 0.7, delay: custom * 0.2 }
        })
    }

    if (skills !== undefined) {
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
                    <div className="flex flex-wrap gap-4">
                        {skills.map((skill, idx) => (
                            <SkillsItem variants={animation} custom={idx + 1} key={idx} skill={skill} idx={idx} />
                        ))}
                    </div>
                </div>
            </motion.div >
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}

export default Skills