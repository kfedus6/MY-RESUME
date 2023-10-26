import { FaArrowRight } from "react-icons/fa"

const Contact = () => {
    return (
        <div id="contactHome" className="flex justify-center items-center pt-10 pb-20">
            <div className="flex flex-col gap-10 w-10/12">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-xl cursor-default">Contact</h2>
                    <hr />
                </div>
                <div className="flex justify-around items-center">
                    <div className="flex items-center gap-10">
                        <div className="w-44">
                            <h3 className="font-bold text-2xl cursor-default">You Need</h3>
                            <span className="text-sm font-bold cursor-default">Beautiful desing for your website leave a request</span>
                        </div>
                        <div>
                            <span className="text-yellow-400">
                                <FaArrowRight />
                            </span>
                        </div>
                    </div>
                    <div>
                        <input className="input" type="text" />
                        <input className="input" type="text" />
                        <textarea className="input" cols={30} rows={10}></textarea>
                        <button className="btn btn-yellow" >Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact