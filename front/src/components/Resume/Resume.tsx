import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { fetchGetEducation, fetchGetExperience } from "../../store/reducers/ActionCreators"

const Resume = () => {
    const dispatch = useAppDispatch()
    const { education }: any = useAppSelector(state => state.educationSlice)
    const { experience }: any = useAppSelector(state => state.experienceSlice)

    useEffect(() => {
        dispatch(fetchGetEducation())
        dispatch(fetchGetExperience())
    }, [])

    return (
        <div id="resumeHome" className="flex justify-center items-center pt-10 pb-20">
            <div className="flex flex-col gap-10 w-10/12">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-xl cursor-default">Resume</h2>
                    <hr />
                    <p className="text-sm cursor-default">Here are my experiences and educations.</p>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-10 w-2/5 h-96">
                        <span className="flex justify-center font-bold text-md cursor-default text-yellow-400">Experiences</span>
                        <div className="flex flex-col gap-7 border-2 border-yellow-400 rounded-lg p-3 overflow-auto touch-none">
                            {experience.map((exp: any) => (
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-bold cursor-default text-lg">{exp.company}</h3>
                                    <span className="text-sm cursor-default text-slate-600">{exp.title}</span>
                                    <span className="text-sm cursor-default text-yellow-400">{exp.time}</span>
                                    <p className="text-sm cursor-default text-slate-600">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 w-2/5 h-96">
                        <span className="flex justify-center font-bold text-md cursor-default text-yellow-400">Educations</span>
                        <div className="flex flex-col gap-7 border-2 border-yellow-400 rounded-lg p-3 overflow-auto touch-none">
                            {education.map((educ: any) => (
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-bold cursor-default text-lg">{educ.education}</h3>
                                    <span className="text-sm cursor-default text-slate-600">{educ.title}</span>
                                    <span className="text-sm cursor-default text-yellow-400">{educ.time}</span>
                                    <p className="text-sm cursor-default text-slate-600">{educ.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume