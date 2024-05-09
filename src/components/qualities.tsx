function Qualities() {
    return (
        <section className="text-center p-6 md:mb-24 lg:flex ">
            <article className="flex flex-col items-center mt-4 md:flex-row lg:flex-col p-7 ">
                <div className="bg-[url(assets/home/desktop/bg-pattern-hero-home.svg)] bg-no-repeat bg-center bg-cover w-2/3 lg:w-1/3">
                    <img className="" src="assets/home/desktop/illustration-passionate.svg" alt="guy at desk" />
                </div>
                <div className="md:text-start flex flex-col md:items-start lg:items-center lg:text-center">
                    <h1 className="uppercase text-2xl tracking-widest font-semibold m-6 md:ml-0 md:font-normal md:pl-12 lg:pl-0 lg:mr-0">passionate</h1>
                    <p className="mb-6 leading-7 w-[90%] md:w-full md:pl-12 lg:pl-0 self-center">Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                </div>
            </article>
            <article className="flex flex-col items-center mt-4 md:flex-row lg:flex-col p-7 justify-around">
                <div className="bg-[url(assets/home/desktop/bg-pattern-hero-home.svg)] bg-no-repeat bg-center bg-cover w-2/3 lg:w-1/3">
                    <img className="" src="assets/home/desktop/illustration-resourceful.svg" alt="girl at desk" />
                </div>
                <div className="md:text-start flex flex-col md:items-start items-center lg:text-center lg:items-center">
                    <h1 className="uppercase text-2xl tracking-widest font-semibold m-6 md:ml-0 md:font-normal md:pl-12 lg:pl-0 lg:mr-0">resourceful</h1>
                    <p className="mb-6 leading-7 w-[90%] md:w-full md:pl-12  lg:pl-0">Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
                </div>
            </article>
            <article className="flex flex-col items-center mt-4 md:flex-row lg:flex-col p-7">
                <div className="bg-[url(assets/home/desktop/bg-pattern-hero-home.svg)] bg-no-repeat bg-center bg-cover w-2/3 lg:w-1/3">
                    <img className="" src="assets/home/desktop/illustration-friendly.svg" alt="guy and girl with picture" />
                </div>
                <div className="md:text-start flex flex-col md:items-start items-center lg:text-center lg:items-center">
                    <h1 className="uppercase text-2xl tracking-widest font-semibold m-6 md:ml-0 md:font-normal md:pl-12 lg:pl-0 lg:mr-0">friendly</h1>
                    <p className="mb-6 leading-7 w-[90%] md:w-full md:pl-12  lg:pl-0"> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                </div>
            </article>
        </section>
    )
}

export default Qualities
