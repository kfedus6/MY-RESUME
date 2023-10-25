import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { fetchGetSkills } from "../../store/reducers/ActionCreators"

const Skills = () => {
    const dispatch = useAppDispatch()
    const { skills }: any = useAppSelector(state => state.skillsSlice)

    useEffect(() => {
        dispatch(fetchGetSkills())
    }, [])

    return (
        <div id="skillsHome" className="flex justify-center items-center pt-20 pb-20">
            <div className="flex flex-col gap-10 w-10/12">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-xl cursor-default">My Skills</h2>
                    <hr />
                    <p className="text-sm cursor-default">Here are my skills.</p>
                </div>
                <div className="flex flex-wrap gap-4">
                    {skills.map((skill: any) => (
                        <div className=
                            {
                                skill.rating === 1 ? "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-yellow-400 from-10% to-white to-10%" :
                                    skill.rating === 2 ? "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-yellow-400 from-20% to-white to-10%" :
                                        skill.rating === 3 ? "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-yellow-400 from-30% to-white to-10%" :
                                            skill.rating === 4 ? "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-yellow-400 from-40% to-white to-10%" :
                                                skill.rating === 5 ? "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-yellow-400 from-50% to-white to-10%" :
                                                    skill.rating === 6 ? "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-yellow-400 from-60% to-white to-10%" :
                                                        skill.rating === 7 ? "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-yellow-400 from-70% to-white to-10%" :
                                                            skill.rating === 8 ? "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-yellow-400 from-80% to-white to-10%" :
                                                                skill.rating === 9 ? "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-yellow-400 from-90% to-white to-10%" :
                                                                    "flex flex-col w-40 h-28 p-5 items-center gap-2 bg-white shadow-2xl rounded-lg hover:bg-gradient-to-r from-yellow-400 from-100% to-white to-10%"
                            } >
                            <img src={`http://127.0.0.1:5000/${skill.image}`} alt={skill.title} />
                            <span className="font-bold cursor-default">{skill.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Skills