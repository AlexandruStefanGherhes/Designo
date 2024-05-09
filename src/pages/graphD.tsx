import Nav from "../components/nav"
import Card from "../components/card"
import DesignCard from "../components/designCard"
import Footer from "../components/footer"
import { Link } from "react-router-dom"
import scrollToTop from "../components/scrollToTop"

function GraphD() {
    return (
    <div className="2xl:max-w-[60%] 2xl:mr-auto 2xl:ml-auto">
        <Nav/>
        <div className="webd-hero bg-[#E7816B] text-white text-center p-4 pt-24 pb-24 mb-14 bg-[url(assets/contact/desktop/bg-pattern-hero-desktop.svg)] bg-cover bg-no-repeat bg-top-right  md:m-6 md:rounded-2xl md:flex md:flex-col md:items-center lg:m-16">
            <h1 className="hero-title text-3xl mb-6 font-semibold md:text-5xl lg:text-6xl">Graphic design</h1>
            <p className="hero-body md:w-1/2 opacity-80 lg:w-2/6 lg:text-lg">We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
        </div>
        <div className="cards p-6 flex flex-col gap-8 lg:m-16 lg:flex-row lg:p-0">
            <Card img={'assets/graphic-design/desktop/image-change.jpg'} title={'tim brown'} body={`A book cover designed for Tim Brown’s new release, ‘Change’`}/>
            <Card img={'assets/graphic-design/desktop/image-boxed-water.jpg'} title={'boxed water'} body={'A simple packaging concept made for Boxed Water'}/>
            <Card img={'assets/graphic-design/desktop/image-science.jpg'} title={'science!'} body={'A poster made in collaboration with the Federal Art Project'}/>
        </div>
        <section className="design-cards uppercase flex flex-col items-center text-center p-6 h-auto gap-6 text-white mt-26 md:mt-[5rem] md:pb-[10rem] lg:flex-row lg:m-16 lg:pl-0 lg:pr-0">
            <Link to='/app-design' className="w-full" onClick={scrollToTop}><DesignCard img={'assets/home/mobile/image-app-design.jpg'} title={"App Design"}/></Link>
            <Link to='/web-design' className="w-full" onClick={scrollToTop}><DesignCard img={'assets/home/mobile/image-web-design.jpg'} title={"Web Design"}/></Link>
        </section>
        <Footer/>
    </div>

    )
}

export default GraphD
