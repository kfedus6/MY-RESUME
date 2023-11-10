import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGetEducation, fetchGetExperience } from "../../store/reducers/ActionCreators"
import { motion } from "framer-motion"

const Resume = () => {
    const dispatch = useDispatch()
    const { education } = useSelector(state => state.educationSlice)
    const { experience } = useSelector(state => state.experienceSlice)

    useEffect(() => {
        dispatch(fetchGetEducation())
        dispatch(fetchGetExperience())
    }, [])

    const animationX = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 0.7, delay: custom * 0.2 }
        })
    }

    const animationXMinus = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 0.7, delay: custom * 0.2 }
        })
    }

    const animation = {
        hidden: {
            opacity: 0,
        },
        visible: (custom) => ({
            opacity: 1,
            transition: { ease: "easeOut", duration: 0.7, delay: custom * 0.2 }
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

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            id="resumeHome" className="flex justify-center items-center pt-10 pb-20">
            <div className="flex flex-col gap-10 w-10/12">
                <div className="flex flex-col gap-2">
                    <motion.h2 custom={1} variants={animation} className="font-bold text-xl cursor-default">Resume</motion.h2>
                    <motion.hr custom={1} variants={animation} />
                    <motion.p custom={1} variants={animationYMinus} className="text-sm cursor-default">Here are my experiences and educations.</motion.p>
                </div>
                <motion.div
                    className="flex justify-between">
                    <div className="flex flex-col gap-10 w-2/5 h-96">
                        <motion.span custom={2} variants={animationXMinus} className="flex justify-center font-bold text-md cursor-default text-yellow-400">Experiences</motion.span>
                        <motion.div custom={2} variants={animationXMinus} className="flex flex-col gap-7 border-2 border-yellow-400 rounded-lg p-3 overflow-auto touch-none">
                            {experience.map((exp) => (
                                <div key={exp.id} className="flex flex-col gap-1">
                                    <h3 className="font-bold cursor-default text-lg">{exp.title}</h3>
                                    <span className="text-sm cursor-default text-slate-600">{exp.company}</span>
                                    <span className="text-sm cursor-default text-yellow-400">{exp.time}</span>
                                    <p className="text-sm cursor-default text-slate-600">{exp.description}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    <div className="flex flex-col gap-10 w-2/5 h-96">
                        <motion.span custom={2} variants={animationX} className="flex justify-center font-bold text-md cursor-default text-yellow-400">Educations</motion.span>
                        <motion.div custom={2} variants={animationX} className="flex flex-col gap-7 border-2 border-yellow-400 rounded-lg p-3 overflow-auto touch-none">
                            {education.map((educ) => (
                                <div key={educ.time} className="flex flex-col gap-1">
                                    <h3 className="font-bold cursor-default text-lg">{educ.education}</h3>
                                    <span className="text-sm cursor-default text-slate-600">{educ.title}</span>
                                    <span className="text-sm cursor-default text-yellow-400">{educ.time}</span>
                                    <p className="text-sm cursor-default text-slate-600">{educ.description}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Resume