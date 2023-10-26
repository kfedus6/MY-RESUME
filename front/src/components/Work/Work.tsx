import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { fetchGetPortfolio } from "../../store/reducers/ActionCreators"

const Work = () => {
    const dispatch = useAppDispatch()
    const { portfolio }: any = useAppSelector(state => state.portfolioSlice)

    useEffect(() => {
        dispatch(fetchGetPortfolio())
    }, [])

    return (
        <div id="worksHome" className="flex justify-center items-center pt-10 pb-20">
            <div className="flex flex-col gap-10 w-10/12">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-xl cursor-default">Works</h2>
                    <hr />
                    <p className="text-sm cursor-default">Here are some of my works.</p>
                </div>
                <div className="flex flex-wrap gap-5">
                    {portfolio.map((item: any, idx: any) => (
                        <div key={item.id} className="flex flex-col items-center gap-2">
                            <div className={
                                idx === 0 ? "flex items-center gap-4 bg-gradient-to-r from-sky-300 to-blue-500 pt-7 pb-7 pl-4 pr-4 shadow-xl rounded-lg" :
                                    idx === 1 ? "flex items-center gap-4 bg-gradient-to-r from-slate-800 to-black pt-7 pb-7 pl-4 pr-4 shadow-xl rounded-lg" :
                                        idx === 2 ? "flex items-center gap-4 bg-gradient-to-r from-slate-600 to-slate-800 pt-7 pb-7 pl-4 pr-4 shadow-xl rounded-lg" :
                                            "flex items-center gap-4 bg-gradient-to-r from-slate-200 to-slate-400 pt-7 pb-7 pl-4 pr-4 shadow-xl rounded-lg"
                            }>
                                <a target="_blank" href={item.link}>
                                    <img className="w-80 h-44 rounded-lg" src={`http://127.0.0.1:5000/${item.image}`} alt={item.title} />
                                </a>
                            </div>
                            <div>
                                <span className="font-bold cursor-default">{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work