import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className='min-h-screen bg-gradient-to-r from-slate-200 to-slate-400 flex justify-center items-center flex-col gap-10 text-white'>
            <img className='w-5/12' src={'http://127.0.0.1:5000/errorNotFound.png'} alt="error" />
            <Link to={'/'} className='btn btn-blue'>Back</Link>
        </div>
    )
}

export default Error