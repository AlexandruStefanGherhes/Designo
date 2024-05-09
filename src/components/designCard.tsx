
function DesignCard<T extends React.ReactNode>({img,title}:{img:string,title:T}) {
    return (
        <article className={`bg-[url(${img})] flex items-center relative w-full rounded-2xl min-h-[16rem]  bg-no-repeat bg-cover flex-col justify-center align-center gap-4`}>
            <h1 className="text-3xl font-semibold z-10 md:text-5xl md:tracking-wider">{title}</h1>
            <div className="body-container flex items-center content-center justify-around]">
                <h2 className="text-md z-10 mr-5 tracking-[.3rem] md:text-xl"><a href="#">View projects</a></h2>
                <img className="w-2" src="assets/shared/desktop/icon-right-arrow.svg" alt="arrow-right" />
            </div>
            <div className="bg-black absolute top-0 left-0 right-0 bottom-0 opacity-40 rounded-2xl"></div>
        </article>
    )
}

export default DesignCard
