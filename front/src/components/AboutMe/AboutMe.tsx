import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { fetchGetAboutMe, fetchGetLinks } from "../../store/reducers/ActionCreators"

const AboutMe = () => {
    const dispatch = useAppDispatch()
    const { aboutMe }: any = useAppSelector(state => state.aboutMeSlice)
    const { links }: any = useAppSelector(state => state.linksSlice)

    useEffect(() => {
        dispatch(fetchGetAboutMe())
        dispatch(fetchGetLinks())
    }, [])

    return (
        <div id="aboutMeHome" className="flex justify-center items-center h-auto bg-gradient-to-r from-green-200 to-sky-300">
            <div className="flex justify-between items-center pt-40 pb-10 w-10/12">
                <div className="flex flex-col gap-5">
                    <div>
                        <p className="font-bold text-lg cursor-default uppercase">Hello, I'm {aboutMe.name} {aboutMe.lastName}</p>
                        <p className="font-bold text-lg cursor-default text-yellow-500">Web Developer</p>
                        <p className="text-sm cursor-default">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div className="flex gap-8">
                        <button className="btn btn-black text-white font-bold">Hire Me</button>
                        <button className="btn btn-white text-black font-bold">Resume</button>
                    </div>
                    <div className="flex gap-5">
                        {links.map((link: any) => (
                            <img key={link.id} src={`http://127.0.0.1:5000/${link.image}`} alt={link.title} />
                        ))}
                    </div>
                </div>
                <div>
                    <img className="w-4/5 rounded-md" src={`http://127.0.0.1:5000/${aboutMe.image}`} alt="i'm" />
                </div>
            </div>
        </div>
    )
}

export default AboutMe