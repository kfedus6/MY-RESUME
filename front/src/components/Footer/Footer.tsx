import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { fetchGetAboutMe, fetchGetLinks } from "../../store/reducers/ActionCreators"
import { motion } from "framer-motion"

const Footer = () => {
    const dispatch = useAppDispatch()
    const { links }: any = useAppSelector(state => state.linksSlice)
    const { aboutMe }: any = useAppSelector(state => state.aboutMeSlice)

    useEffect(() => {
        dispatch(fetchGetLinks())
        dispatch(fetchGetAboutMe())
    }, [])

    const animationYMinus = {
        hidden: {
            y: -50,
            opacity: 0,
        },
        visible: (custom: any) => ({
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 0.7, delay: custom * 0.2 }
        })
    }

    const animationY = {
        hidden: {
            y: 50,
            opacity: 0,
        },
        visible: (custom: any) => ({
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 0.7, delay: custom * 0.2 }
        })
    }

    const animation = {
        hidden: {
            opacity: 0,
        },
        visible: (custom: any) => ({
            opacity: 1,
            transition: { ease: "easeOut", duration: 0.7, delay: custom * 0.2 }
        })
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center pt-10 pb-10 gap-10">
            <motion.h2 custom={2} variants={animationY} className="font-bold text-2xl cursor-default">Let's Talk</motion.h2>
            <motion.div custom={1} variants={animation} className="flex gap-5">
                {links.map((link: any) => (
                    <div className="cursor-pointer transition ease-in hover:-translate-y-1 hover:scale-110 duration-200" key={link.id}>
                        <a target="_blank" href={link.link}>
                            <img src={`http://127.0.0.1:5000/${link.image}`} alt={link.title} />
                        </a>
                    </div>
                ))}
            </motion.div>
            <motion.p custom={2} variants={animationYMinus} className="text-sm cursor-default">{aboutMe.description}.</motion.p>
            <motion.p custom={3} variants={animationYMinus} className="text-sm cursor-default font-bold">{aboutMe.country}, {aboutMe.town}</motion.p>
        </motion.div>
    )
}

export default Footer