import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { fetchGetAboutMe } from "../../store/reducers/ActionCreators"
import { useEffect } from "react"
import { motion } from "framer-motion"

const Header = () => {
    const dispatch = useAppDispatch()
    const { aboutMe }: any = useAppSelector(state => state.aboutMeSlice)

    useEffect(() => {
        dispatch(fetchGetAboutMe())
    }, [])

    useEffect(() => {
        const links = document.querySelectorAll('nav a')

        document.addEventListener('scroll', () => {
            links.forEach(l => {
                if (window.scrollY >= 0 && l.textContent === 'Home') {
                    document.querySelector('.active')?.classList.remove('active')
                    l.classList.add('active')
                } else if (window.scrollY > 600 && l.textContent === 'Skills') {
                    document.querySelector('.active')?.classList.remove('active')
                    l.classList.add('active')
                } else if (window.scrollY > 1400 && l.textContent === 'Works') {
                    document.querySelector('.active')?.classList.remove('active')
                    l.classList.add('active')
                } else if (window.scrollY > 2150 && l.textContent === 'Resume') {
                    document.querySelector('.active')?.classList.remove('active')
                    l.classList.add('active')
                } else if (window.scrollY > 2750 && l.textContent === 'Contact') {
                    document.querySelector('.active')?.classList.remove('active')
                    l.classList.add('active')
                }
            })
        })

        // links.forEach(link => {
        //     link.addEventListener('click', () => {
        //         document.querySelector('.active')?.classList.remove('active')
        //         link.classList.add('active')
        //     })
        // })
    }, [])

    const textAnimation = {
        hidden: {
            y: -100,
            opacity: 0
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
            className="w-10/12 p-5 flex justify-between items-center">
            <div>
                <motion.h1 custom={1} variants={textAnimation} className="font-bold text-lg cursor-default">{aboutMe.name} {aboutMe.lastName}</motion.h1>
            </div>
            <nav>
                <motion.ul custom={1} variants={textAnimation} className="flex items-center gap-12">
                    <li><a className="link-animation uppercase font-bold text-sm" href="#aboutMeHome">Home</a></li>
                    <li><a className="link-animation uppercase font-bold text-sm" href="#skillsHome">Skills</a></li>
                    <li><a className="link-animation uppercase font-bold text-sm" href="#worksHome">Works</a></li>
                    <li><a className="link-animation uppercase font-bold text-sm" href="#resumeHome">Resume</a></li>
                    <li><a className="link-animation uppercase font-bold text-sm" href="#contactHome">Contact</a></li>
                </motion.ul>
            </nav>
        </motion.div>
    )
}

export default Header