import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { fetchGetAboutMe } from "../../store/reducers/ActionCreators"
import { AboutMeState } from "../../store/reducers/AboutMeSlice"

const AboutMe = () => {
    const dispatch = useAppDispatch()
    const { aboutMe }: AboutMeState = useAppSelector(state => state.aboutMeSlice)

    useEffect(() => {
        dispatch(fetchGetAboutMe())
    }, [])

    return (
        <div id="aboutMe" className="h-96 bg-gradient-to-r from-cyan-500 to-blue-500">
            AboutMe
        </div>
    )
}

export default AboutMe