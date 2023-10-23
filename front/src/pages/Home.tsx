import AboutMe from "../components/AboutMe/AboutMe"
import Contact from "../components/Contact/Contact"
import Resume from "../components/Resume/Resume"
import Skills from "../components/Skills/Skills"
import Work from "../components/Work/Work"

const Home = () => {
    return (
        <div>
            <AboutMe />
            <Skills />
            <Work />
            <Resume />
            <Contact />
        </div>
    )
}

export default Home