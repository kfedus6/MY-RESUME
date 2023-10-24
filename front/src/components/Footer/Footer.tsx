import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { fetchGetLinks } from "../../store/reducers/ActionCreators"

const Footer = () => {
    const dispatch = useAppDispatch()
    const { links }: any = useAppSelector(state => state.linksSlice)

    useEffect(() => {
        dispatch(fetchGetLinks())
    }, [])

    return (
        <div className="flex flex-col justify-center items-center pt-10 pb-10 gap-10">
            <h2 className="font-bold text-2xl">Let's Talk</h2>
            <div className="flex gap-5">
                {links.map((link: any) => (
                    <img key={link.id} src={`http://127.0.0.1:5000/${link.image}`} alt={link.title} />
                ))}
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aliquam.</p>
        </div>
    )
}

export default Footer