import Nav from "../components/nav"
import Card from "../components/card"
import DesignCard from "../components/designCard"
import Footer from "../components/footer"
import { Link } from "react-router-dom"
import scrollToTop from "../components/scrollToTop"
function AppD() {
    return (
    <div className="2xl:max-w-[60%] 2xl:mr-auto 2xl:ml-auto">
        <Nav/>
        <div className="webd-hero bg-[#E7816B] text-white text-center p-4 pt-24 pb-24 mb-14 bg-[url(assets/contact/desktop/bg-pattern-hero-desktop.svg)] bg-cover bg-no-repeat bg-top-right  md:m-6 md:rounded-2xl md:flex md:flex-col md:items-center lg:m-16">
            <h1 className="hero-title text-3xl mb-6 font-semibold md:text-5xl lg:text-6xl">App design</h1>
            <p className="hero-body md:w-1/2 opacity-80 lg:w-2/6 lg:text-lg">Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
        </div>
        <div className="cards p-6 flex flex-col gap-8 lg:m-16 lg:grid lg:grid-rows-2 lg:grid-cols-3 lg:p-0">
            <Card img={'assets/app-design/desktop/image-airfilter.jpg'} title={'airfilter'} body={'Solving the problem of poor indoor air quality by filtering the air'}/>
            <Card img={'assets/app-design/desktop/image-eyecam.jpg'} title={'eyecam'} body={'Product that lets you edit your favorite photos and videos at any time'}/>
            <Card img={'assets/app-design/desktop/image-faceit.jpg'} title={'faceit'} body={'Get to meet your favorite internet superstar with the faceit app'}/>
            <Card img={'assets/app-design/desktop/image-loopstudios.jpg'} title={'loopstudios'} body={'A todo app that features cloud sync with light and dark mode'}/>
            <Card img={'assets/app-design/desktop/image-todo.jpg'} title={'todo'} body={'A VR experience app made for Loopstudios'}/>
        </div>
        <section className="design-cards uppercase flex flex-col items-center text-center p-6 h-auto gap-6 text-white mt-26 md:mt-[5rem] md:pb-[10rem] lg:flex-row lg:m-16">
            <Link to='/web-design' className="w-full" onClick={scrollToTop}><DesignCard img={'assets/home/mobile/image-web-design.jpg'} title={"Web Design"}/></Link>
            <Link to='/graphic-design' className="w-full" onClick={scrollToTop}><DesignCard img={'assets/home/mobile/image-graphic-design.jpg'} title={"Graphic Design"}/></Link>
        </section>
        <Footer/>
    </div>

    )
}

export default AppD
