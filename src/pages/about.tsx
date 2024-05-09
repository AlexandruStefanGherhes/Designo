import Nav from "../components/nav"
import Footer from "../components/footer"
function About() {
    return (
    <div className="2xl:max-w-[60%] 2xl:mr-auto 2xl:ml-auto">
        <Nav/>
        <div className="md:m-6 md:rounded-xl lg:flex lg:flex-row-reverse lg:mb-[10rem] lg:m-12"> 
            <img src="assets/about/mobile/image-about-hero.jpg" alt="people-at-desk-overhead-shot" className="md:hidden " />
            <img src="assets/about/tablet/image-about-hero.jpg" alt="people-at-desk-overhead-shot" className="w-full hidden md:block lg:hidden" />
            <img src="assets/about/desktop/image-about-hero.jpg" alt="people-at-desk-overhead-shot" className="w-full hidden lg:block" />
            <div className="webd-hero bg-[#E7816B] text-white text-center p-4 pt-24 pb-24 bg-[url(assets/contact/desktop/bg-pattern-hero-desktop.svg)] bg-cover bg-no-repeat bg-top-right md:flex md:flex-col md:items-center lg:justify-center">
                <h1 className="hero-title text-3xl mb-6 font-semibold md:text-4xl lg:text-6xl">About us</h1>
                <p className="hero-body md:w-[80%] lg:text-lg">Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
            </div>
        </div>
        <div className="md:m-6 md:rounded-xl lg:flex  lg:mt-[10rem] lg:m-12">
            <img src="assets/about/mobile/image-world-class-talent.jpg" alt="person-staring-at-a-wall" className="md:hidden"/>
            <img src="assets/about/tablet/image-world-class-talent.jpg" alt="person-staring-at-a-wall" className="w-full hidden md:block lg:hidden" />
            <img src="assets/about/desktop/image-world-class-talent.jpg" alt="person-staring-at-a-wall" className="w-full hidden lg:block" />

            <div className="talent bg-[#FDF3F0] bg-[url(assets/about/mobile/bg-pattern-hero-about-mobile.svg)] bg-fit bg-left-center bg-repeat-y text-center p-4 pt-24 pb-24  md:flex md:flex-col md:items-center lg:justify-center">
                <h1 className="talent-title text-[#E7816B] text-3xl mb-6 font-semibold md:text-4xl lg:text-6xl">World-class talent</h1>
                <p className="talent-body pb-10 md:w-[80%] lg:text-lg">We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
                <p className="talent-body md:w-[80%] lg:text-lg">Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
            </div>
        </div>
        <section className="locations pt-20 pb-20 flex flex-col justify-between lg:flex-row lg:mt-[10rem] lg:m-12">
            <article className="canada flex flex-col text-center items-center  mb-10 lg:mb-0 lg:w-[20%]">
                <img className="w-3/5 bg-[url(assets/home/desktop/bg-pattern-hero-home.svg)] bg-no-repeat bg-center bg-contain md:w-[30%] lg:w-full" src="assets/shared/desktop/illustration-canada.svg " alt="canada" />
                <h1 className="location-title uppercase text-2xl tracking-[.5rem] mt-8">Canada</h1>
                <button className="canada-btn upppercase uppercase text-lg bg-[#e7816b] text-white p-5 mt-8 tracking-widest rounded-lg">See location</button>
            </article>
            <article className="canada flex flex-col text-center items-center  mb-10 lg:mb-0 lg:w-[20%]">
                <img className="w-3/5 bg-[url(assets/home/desktop/bg-pattern-hero-home.svg)] bg-no-repeat bg-center bg-contain md:w-[30%] lg:w-full" src="assets/shared/desktop/illustration-australia.svg" alt="australia" />
                <h1 className="location-title uppercase text-2xl tracking-[.5rem] mt-8">australia</h1>
                <button className="canada-btn upppercase uppercase text-lg bg-[#e7816b] text-white p-5 mt-8 tracking-widest rounded-lg">See location</button>
            </article>
            <article className="canada flex flex-col text-center items-center lg:w-[20%]">
                <img className="w-3/5 bg-[url(assets/home/desktop/bg-pattern-hero-home.svg)] bg-no-repeat bg-center bg-contain md:w-[30%] lg:w-full" src="assets/shared/desktop/illustration-united-kingdom.svg" alt="united-kingdom" />
                <h1 className="location-title uppercase text-2xl tracking-[.5rem] mt-8 ">England</h1>
                <button className="canada-btn upppercase uppercase text-lg bg-[#e7816b] text-white p-5 mt-8 tracking-widest rounded-lg">See location</button>
            </article>
        </section>
        <section className="real-deal mt-14 md:m-6 md:rounded-xl md:mb-[20rem] lg:flex lg:flex-row-reverse lg:m-12 lg:mt-[10rem] lg:pb-[10rem]">
            <img src="assets/about/mobile/image-real-deal.jpg" alt="real-deal" className="md:hidden"/>
            <img src="assets/about/tablet/image-real-deal.jpg" alt="real-deal" className="hidden md:block lg:hidden w-full"/>
            <img src="assets/about/desktop/image-real-deal.jpg" alt="real-deal" className="hidden lg:block"/>
            <div className="real-deal-text bg-[#FDF3F0] text-center p-2 pt-16 pb-16 bg-[url(assets/shared/desktop/bg-pattern-three-circles.svg)] bg-no-repeat bg-cover  md:flex md:flex-col md:items-center lg:justify-center">
                <h1 className="real-deal-title text-[#E7816B] text-3xl mb-6 font-medium md:text-4xl lg:text-6xl">The real deal</h1>
                <p className="real-deal-body mb-4 md:w-[80%] lg:text-lg">
                As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
                Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.
                </p>
                <p className="real-deal-body  md:w-[80%] lg:text-lg">
                We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
                </p>
            </div>
        </section>
        <Footer/>
    </div>
    )
}

export default About
