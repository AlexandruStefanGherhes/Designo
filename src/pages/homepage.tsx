import {Link} from 'react-router-dom'
import Nav from "../components/nav"
import Button from "../components/button"
import Qualities from "../components/qualities"
import Footer from "../components/footer"
import DesignCard from "../components/designCard"
import scrollToTop from '../components/scrollToTop'

function Homepage() {
return (
<div className="font-jost overflow-hidden md:flex md:flex-col 2xl:max-w-[60%] 2xl:mr-auto xl:ml-auto">
    <Nav/>
    <section className="bg-[#E7816B] mt-6 family-jost md:w-[93.5%] md:rounded-2xl md:self-center lg:mt-14"> 
        <article className="hero flex flex-col text-center p-4 pt-16 pb-0  text-white items-center bg-[url(assets/contact/desktop/bg-pattern-hero-desktop.svg)] bg-left bg-cover bg-no-repeat lg:items-start lg:text-start lg:flex-row ">
            <div className='lg:ml-24 lg:mt-24 flex flex-col items-center lg:items-start'>
                <h1 className="mb-4 text-3xl font-semibold md:w-4/5 md:text-5xl md:tracking-wide lg:w-full lg:leading-16">Award-winning custom designs and digital branding solutions</h1>
                <p className="pb-10 w-[88%] whitespace-pre-line md:w-4/6 md:mt-6 lg:w-[90%] lg:text-xl ">
                    With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences.
                Find out more about our services.</p>
                <div className='lg:w-[50%] w-full md:w-1/2'>
                    <Link to='/about' className='w-full md:w-2/4'><Button text='Learn More'/></Link>
                </div>
            </div>
            <div className="bg-[url(assets/home/desktop/image-hero-phone.png)] bg-top w-[110%] h-[35rem] mt-[-5rem] bg-no-repeat lg:bg-[right_0rem_top_0rem] lg:h-[52rem] ">
            </div>
        </article>
    </section>
    <section className="design-cards uppercase flex flex-col items-center text-center p-6 h-auto gap-6 text-white mt-26 md:mt-28 lg:p-12 lg:grid lg:grid-cols-2 lg:grid-rows-2 ">
            <Link to='/web-design' className='w-full lg:row-end-3 lg:row-start-1 self-stretch' onClick={scrollToTop}><DesignCard img={'assets/home/mobile/image-web-design.jpg'} title={'Web Design'}/></Link>
            <Link to='/app-design' className='w-full' onClick={scrollToTop}><DesignCard img={'assets/home/mobile/image-app-design.jpg'} title={'App Design'}/></Link>
            <Link to='/graphic-design' className='w-full' onClick={scrollToTop}><DesignCard img={'assets/home/mobile/image-graphic-design.jpg'} title={'Graphic Design'}/></Link>
    </section>
    <Qualities/>
    <Footer/>
</div>
)
}

export default Homepage
