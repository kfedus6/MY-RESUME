import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { IoIosSend } from "react-icons/io"
import { useDispatch } from "react-redux"
import { fetchSendEmail } from "../../store/reducers/ActionCreators"
import { motion } from "framer-motion"

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const sendMessage = () => {
        let obj = new FormData()
        obj.append('name', name)
        obj.append('email', email)
        obj.append('message', message)
        dispatch(fetchSendEmail(obj))
        setName('')
        setEmail('')
        setMessage('')
    }

    const animationXMinus = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 0.7, delay: custom * 0.2 }
        })
    }

    const animationX = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 0.7, delay: custom * 0.2 }
        })
    }

    const animation = {
        hidden: {
            opacity: 0,
        },
        visible: (custom) => ({
            opacity: 1,
            transition: { ease: "easeOut", duration: 0.7, delay: custom * 0.2 }
        })
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            id="contactHome" className="flex justify-center items-center pt-10 pb-20">
            <div className="flex flex-col gap-10 pb-20 w-10/12">
                <motion.div custom={1} variants={animation} className="flex flex-col gap-2">
                    <h2 className="font-bold text-xl cursor-default">Contact</h2>
                    <hr />
                </motion.div>
                <motion.div
                    viewport={{ amount: 0.2, once: true }}
                    className="flex justify-around items-center">
                    <motion.div custom={2} variants={animationXMinus} className="flex items-center gap-10">
                        <div className="w-44">
                            <h3 className="font-bold text-2xl cursor-default">You Need</h3>
                            <span className="text-sm font-bold cursor-default">Beautiful desing for your website leave a request.</span>
                        </div>
                        <div>
                            <span className="text-yellow-400">
                                <FaArrowRight />
                            </span>
                        </div>
                    </motion.div>
                    <motion.div custom={2} variants={animationX} className="flex flex-col gap-2">
                        <input className="input" type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input className="input" type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        <textarea className="input" placeholder="Write your message" value={message} onChange={(e) => setMessage(e.target.value)} cols={50} rows={5}></textarea>
                        <button className="flex justify-center btn btn-yellow">
                            <span onClick={() => sendMessage()}>Send</span>
                            <span><IoIosSend size="20" /></span>
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Contact