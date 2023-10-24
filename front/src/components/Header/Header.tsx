import { NavLink } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { fetchGetAboutMe } from "../../store/reducers/ActionCreators"
import { useEffect } from "react"

const Header = () => {
    const dispatch = useAppDispatch()
    const { aboutMe }: any = useAppSelector(state => state.aboutMeSlice)

    useEffect(() => {
        dispatch(fetchGetAboutMe())
    }, [])

    useEffect(() => {
        const links = document.querySelectorAll('nav a')

        links.forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.active')?.classList.remove('active')
                link.classList.add('active')
            })
        })
    }, [])

    return (
        <div className="w-10/12 p-5 flex justify-between items-center">
            <div>
                <h1 className="font-bold text-lg cursor-default">{aboutMe.name} {aboutMe.lastName}</h1>
            </div>
            <nav>
                <ul className="flex items-center gap-12">
                    <li><a className="link-animation uppercase font-bold text-sm" href="#aboutMeHome">Home</a></li>
                    <li><a className="link-animation uppercase font-bold text-sm" href="#skillsHome">Skills</a></li>
                    <li><a className="link-animation uppercase font-bold text-sm" href="#worksHome">Works</a></li>
                    <li><a className="link-animation uppercase font-bold text-sm" href="#resumeHome">Resume</a></li>
                    <li><a className="link-animation uppercase font-bold text-sm" href="#contactHome">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header