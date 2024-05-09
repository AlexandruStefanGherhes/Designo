
function Card<T extends React.ReactNode>({img,title,body}:{img:string,title:T,body:T}) {

    return (
    <div className="card flex flex-col md:flex-row lg:flex-col rounded-3xl text-center overflow-hidden cursor-pointer">
        <div className="card-img md:flex-1">
            <img src={img} alt="card-img" />
        </div>
        <div className="card-text bg-[#FDF3F0] p-6 flex flex-col gap-6 md:justify-center md:flex-1">
            <h1 className="card-text-title text-[#E7816B] text-2xl uppercase tracking-[.4rem]">{title}</h1>
            <p className="card-text-body md:w-[90%] lg:w-[70%] lg:self-center">{body}</p>
        </div>
    </div>
    )
}

export default Card
