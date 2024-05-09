
function Designs() {
    return (
    <section className="uppercase flex flex-col items-center text-center p-6 h-auto gap-6 text-white mt-26">
        <article className="bg-[url(assets/home/mobile/image-web-design.jpg)] relative w-full rounded-2xl h-[16rem] bg-no-repeat bg-cover flex flex-col justify-center align-center gap-4">
            <h1 className="text-3xl font-semibold z-10">web design</h1>
            <h2 className="text-xl z-10"><a href="#">View projects</a></h2>
            <div className="bg-black absolute top-0 left-0 right-0 bottom-0 opacity-40 rounded-2xl"></div>
        </article>
        <article className="bg-[url(assets/home/mobile/image-app-design.jpg)] relative w-full rounded-2xl h-[16rem] bg-no-repeat bg-cover flex flex-col justify-center align-center gap-4">
            <h1 className="text-3xl font-semibold z-10">app design</h1>
            <h2 className="text-xl z-10"><a href="#">View projects</a></h2>
            <div className="bg-black absolute top-0 left-0 right-0 bottom-0 opacity-40 rounded-2xl"></div>
        </article>
        <article className="bg-[url(assets/home/mobile/image-graphic-design.jpg)] relative w-full rounded-2xl h-[16rem] bg-no-repeat bg-cover flex flex-col justify-center align-center gap-4">
            <h1 className="text-3xl font-semibold z-10">graphic design</h1>
            <h2 className="text-xl z-10"><a href="#">View projects</a></h2>
            <div className="bg-black absolute top-0 left-0 right-0 bottom-0 opacity-40 rounded-2xl"></div>
        </article>
    </section>
)
}

export default Designs
