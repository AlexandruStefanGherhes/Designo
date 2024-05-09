import Nav from "../components/nav"
import Card from "../components/card"
import DesignCard from "../components/designCard"
import Footer from "../components/footer"
import { Link } from "react-router-dom"

function WebD() {
    return (
    <div className="2xl:max-w-[60%] 2xl:mr-auto 2xl:ml-auto">
        <Nav/>
        <div className="webd-hero bg-[#E7816B] text-white text-center p-4 pt-24 pb-24 mb-14 bg-[url(assets/contact/desktop/bg-pattern-hero-desktop.svg)] bg-cover bg-no-repeat bg-top-right md:m-6 md:rounded-2xl md:flex md:flex-col md:items-center lg:m-16">
            <h1 className="hero-title text-3xl mb-6 font-semibold md:text-5xl lg:text-6xl">Web design</h1>
            <p className="hero-body md:w-1/2 opacity-80 lg:w-2/6 lg:text-lg">We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
        </div>
        <div className="cards p-6 flex flex-col gap-8 lg:grid lg:grid-rows-2 lg:grid-cols-3 lg:p-16">
            <Card img={'assets/web-design/desktop/image-express.jpg'} title={'express'} body={'A multi-carrier shipping website for ecommerce businesses'}/>
            <Card img={'assets/web-design/desktop/image-transfer.jpg'} title={'transfer'} body={'Site for low-cost money transfers and sending money within seconds'}/>
            <Card img={'assets/web-design/desktop/image-photon.jpg'} title={'photon'} body={'A state-of-the-art music player with high-resolution audio and DSP effects'}/>
            <Card img={'assets/web-design/desktop/image-builder.jpg'} title={'builder'} body={'Connects users with local contractors based on their location'}/>
            <Card img={'assets/web-design/desktop/image-blogr.jpg'} title={'blogr'} body={'Blogr is a platform for creating an online blog or publication'}/>
            <Card img={'assets/web-design/desktop/image-camp.jpg'} title={'camp'} body={'Get expert training in coding, data, design, and digital marketing'}/>
        </div>
        <section className="design-cards uppercase flex flex-col items-center text-center p-6 h-auto gap-6 text-white mt-26 md:mt-[5rem] md:pb-[10rem] lg:flex-row lg:pb-[12rem] lg:p-16 lg:mt-0">
            <Link to='/app-design' className="w-full">
                <DesignCard img={'assets/home/mobile/image-app-design.jpg'} title={"App Design"}/>
            </Link>
            <Link to='/graphic-design' className="w-full">
                <DesignCard img={'assets/home/mobile/image-graphic-design.jpg'} title={"Graphic Design"}/>
            </Link>
        </section>
        <Footer/>
    </div>

    )
}

export default WebD
