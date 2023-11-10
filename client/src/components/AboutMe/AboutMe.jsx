import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGetAboutMe, fetchGetLinks } from "../../store/reducers/ActionCreators"
import { motion } from "framer-motion"

const AboutMe = () => {
    const dispatch = useDispatch()
    const { aboutMe } = useSelector(state => state.aboutMeSlice)
    const { links } = useSelector(state => state.linksSlice)

    useEffect(() => {
        dispatch(fetchGetAboutMe())
        dispatch(fetchGetLinks())
    }, [])

    const animationX = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 1, delay: custom * 0.2 }
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

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            id="aboutMeHome" className="flex justify-center items-center h-auto bg-gradient-to-r from-green-200 to-sky-300">
            <div className="flex justify-between items-center pt-40 pb-32 w-10/12">
                <div className="flex flex-col gap-5">
                    <div>
                        <motion.p custom={1} variants={animationXMinus} className="font-bold text-lg cursor-default uppercase">Hello, I'm {aboutMe.name} {aboutMe.lastName}</motion.p>
                        <motion.p custom={2} variants={animationXMinus} className="font-bold text-lg cursor-default text-yellow-500">Web Developer</motion.p>
                        <motion.p custom={3} variants={animationXMinus} className="text-sm cursor-default">{aboutMe.description}.</motion.p>
                    </div>
                    <motion.div custom={6} variants={animationXMinus} className="flex gap-8">
                        <button className="flex justify-center w-36 btn btn-black text-white font-bold">
                            <a href="#contactHome">Hire Me</a>
                        </button>
                        <button className="flex justify-center w-36 btn btn-white text-black font-bold">
                            <a href="http://127.0.0.1:5000/MykolaFedusResume.pdf" target="_blank">Resume</a>
                            <img className="w-4" src={`http://127.0.0.1:5000/download.png`} alt="dow" />
                        </button>
                    </motion.div>
                    <motion.div custom={5} variants={animationXMinus} className="flex gap-5">
                        {links.map((link, idx) => (
                            <div key={link.id} className="cursor-pointer transition ease-in hover:-translate-y-1 hover:scale-110 duration-200" >
                                <a target="_blank" href={link.link}>
                                    <img src={`http://127.0.0.1:5000/${link.image}`} alt={link.title} />
                                </a>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <motion.div custom={1} variants={animationX} className="flex justify-center items-center">
                    <img className="w-11/12 rounded-md" src={`http://127.0.0.1:5000/${aboutMe.image}`} alt="i'm" />
                </motion.div>
            </div>
        </motion.div >
    )
}

export default AboutMe