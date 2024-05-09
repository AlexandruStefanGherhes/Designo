import Nav from "../components/nav"
import Footer from "../components/footer"

function Locations() {
    return (
    <div className="2xl:max-w-[60%] 2xl:mr-auto 2xl:ml-auto">
        <Nav/>
        <section className="locations-section md:p-6 lg:m-14 lg:p-0 lg:pb-[10rem]">
            <article className="location-canada mb-10 lg:flex lg:flex-row-reverse lg:gap-8">
                <div className="h-[20.4rem] location-canada-image bg-[url(assets/locations/tablet/image-map-canada.png)] bg-no-repeat bg-fit bg-right md:bg-cover md:mb-8 lg:mb-0 md:rounded-2xl  lg:w-1/3" ></div>
                <div className="location-canada-information bg-[#FDF3F0] text-center p-16 pt-20 pb-20 bg-[url(assets/shared/desktop/bg-pattern-three-circles.svg)] bg-no-repeat bg-fit md:flex md:flex-col md:items-start md:mb-28 lg:mb-0 md:rounded-xl  lg:w-2/3">
                    <h1 className="adress-title uppercase text-[#E7816B] tracking-widest text-2xl font-medium md:font-semi-bold md:text-4xl">Canada</h1>
                    <div className="md:flex md:text-start md:gap-32">
                        <div className="location-canada-adress">
                            <div className="adress-body flex flex-col mt-8">
                                <span className=" font-bold">Designo Central Office</span>
                                <span>3886 Wellington StreetToronto,</span>
                                <span>Ontario M9C 3J5</span>
                            </div>
                        </div>
                        <div className="location-canada-contact flex flex-col mt-8" >
                            <span className="contact-title font-bold">Contact</span>
                            <span className="contact-phone">P : +1 253-863-8967</span>
                            <span className="contact-mail">M : contact@designo.co</span>
                        </div>
                    </div>
                </div>
            </article>
            <article className="location-australia mb-10 lg:flex lg:gap-8">
                <div className="h-[20.4rem] location-canada-image bg-[url(assets/locations/tablet/image-map-australia.png)] bg-no-repeat bg-fit bg-right md:bg-cover md:mb-8 lg:mb-0 md:rounded-xl  lg:w-1/3" ></div>
                <div className="location-canada-information bg-[#FDF3F0] text-center p-16 pt-20 pb-20 bg-[url(assets/shared/desktop/bg-pattern-three-circles.svg)] bg-no-repeat bg-fit md:flex md:flex-col md:items-start md:mb-28 lg:mb-0 md:rounded-xl  lg:w-2/3 ">
                    <h1 className="adress-title uppercase text-[#E7816B] tracking-widest text-2xl font-medium md:font-semi-bold md:text-4xl">Australia</h1>
                    <div className="md:flex md:text-start md:gap-32">
                        <div className="location-canada-adress">
                            <div className="adress-body flex flex-col mt-8">
                                <span className=" font-bold">Designo Au Office</span>
                                <span>19 Balone Street</span>
                                <span>New South Wales 2443</span>
                            </div>
                        </div>
                        <div className="location-canada-contact flex flex-col mt-8" >
                            <span className="contact-title font-bold">Contact</span>
                            <span className="contact-phone">P : (02) 6720-9092</span>
                            <span className="contact-mail">M : contact@designo.au</span>
                        </div>
                    </div>
                </div>
            </article>
            <article className="location-uk mb-10 lg:flex lg:flex-row-reverse lg:gap-8 ">
                <div className="h-[20.4rem] location-canada-image bg-[url(assets/locations/tablet/image-map-uk.png)] bg-no-repeat bg-fit bg-right md:bg-cover md:mb-8 lg:mb-0 md:rounded-xl  lg:w-1/3" ></div>
                <div className="location-canada-information bg-[#FDF3F0] text-center p-16 pt-20 pb-20 bg-[url(assets/shared/desktop/bg-pattern-three-circles.svg)] bg-no-repeat bg-fit md:flex md:flex-col md:items-start md:mb-44 lg:mb-0 md:rounded-xl  lg:w-2/3">
                    <h1 className="adress-title uppercase text-[#E7816B] tracking-widest text-2xl font-medium md:font-semi-bold md:text-4xl">United Kingdom</h1>
                    <div className="md:flex md:text-start md:gap-32">
                        <div className="location-canada-adress">
                            <div className="adress-body flex flex-col mt-8">
                                <span className=" font-bold">Designo UK Office</span>
                                <span>13 Colorado Way</span>
                                <span>Rhyd-y-fro SA8 9GA</span>
                            </div>
                        </div>
                        <div className="location-canada-contact flex flex-col mt-8" >
                            <span className="contact-title font-bold">Contact</span>
                            <span className="contact-phone">P : 078 3115 1400</span>
                            <span className="contact-mail">M : contact@designo.uk</span>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <Footer/>
    </div>
    )
}

export default Locations
