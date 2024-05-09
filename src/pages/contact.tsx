import { useState } from "react"
import Nav from "../components/nav"
import { Link } from "react-router-dom"
import scrollToTop from "../components/scrollToTop"
import Button from "../components/button"
function Contact() {

    type formState = {
        name:string,
        email:string,
        phone:number | string ,
        comment:string
    }

    type alertState = {
        name:boolean,
        email:boolean
    }

    const initialAlertState = {
        name:false,
        email:false
    }

    const initialFormState = {
        name:'',
        email:'',
        phone:'',
        comment:''
    }

    const [formState,setFormState] = useState<formState>(initialFormState)
    const [alertState, setAlertState] = useState<alertState>(initialAlertState);
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const lettersFormt = /^[A-Za-z]+$/;
        if(!formState.name || formState.name.length <= 1 || !formState.name.match(lettersFormt)){
            console.log('Please enter a name')
            setAlertState({...alertState, name:true})
            return
        }else if(!formState.email || !formState.email.match(mailFormat)){
            console.log('Please enter a valid email')
            setAlertState({...alertState, email:true})
            return
        }else{
            console.log(formState);
            setFormState(initialFormState);
            setAlertState(initialAlertState)
        }
    }

    return (
    <div className="2xl:max-w-[60%] 2xl:mr-auto 2xl:ml-auto">
        <Nav/>
        <div className="contact-form bg-[#E7816B] text-white text-center p-8 pt-16 pb-16 md:m-6 md:p-16 md:rounded-2xl lg:m-14 lg:flex lg:p-32 lg:pt-16 lg:pb-16">
            <div className="contact-form-info md:text-start lg:self-center lg:w-[60%]"> 
                <h1 className="form-info-title pb-8 text-4xl md:text-5xl md:font-semibold lg:text-6xl capitalize">Contact us</h1>
                <p className="form-info-body leading-6 md:leading-8 lg:text-xl lg:w-[85%]">Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
            </div>
            <form action="submit" className="flex flex-col text-start pt-8 w-full lg:w-[40%] relative" onSubmit={onSubmit}>
                <input type="text" id="name" className="bg-[#E7816B] border-b-2 outline-none pb-4 pl-4 placeholder-white placeholder-opacity-[70%]" placeholder="Name" value={formState.name} onChange = {e=> setFormState({...formState, name:e.target.value})}/>
                {alertState.name ? <div className="error-name absolute left-[11rem] md:left-[31rem] lg:left-[18rem] flex">
                    <p className="mr-[.6rem]  text-sm">Can't be empty</p>
                    <img src="assets/contact/desktop/icon-error.svg" className="w-6" alt="error-icon" />
                </div> 
                :<></>}
                <input type="text" id="email" className="bg-[#E7816B] border-b-2 outline-none pt-6 pb-4 pl-4 placeholder-white placeholder-opacity-[70%]" placeholder="Email Adress" value={formState.email} onChange = {e=> setFormState({...formState, email:e.target.value})}/>
                {alertState.email ? <div className="error-name absolute left-[11rem] flex top-[6rem] md:left-[31rem] lg:left-[18rem]">
                    <p className="mr-[.6rem] text-sm">Can't be empty</p>
                    <img src="assets/contact/desktop/icon-error.svg" className="w-6" alt="error-icon" />
                </div> 
                :<></>}
                <input type="text" id="phone" className="bg-[#E7816B] border-b-2 outline-none pt-6 pb-4 pl-4 placeholder-white placeholder-opacity-[70%]" placeholder="Phone" value={formState.phone} onChange = {e=> setFormState({...formState, phone:e.target.value})}/>
                <textarea name="message" id="message" cols={15} rows={10} placeholder="Your message" className="bg-[#E7816B] border-b-2 pl-4 mt-6 mb-16 text-white outline-none placeholder-white placeholder-opacity-[70%]" value={formState.comment} onChange = {e=> setFormState({...formState, comment:e.target.value})}></textarea>
                <div className="flex justify-center w-full md:justify-end md:self-end md:w-3/6">
                    <Button text={'SUBMIT'}/>
                </div>
            </form>
        </div>
            <section className="locations pt-20  flex flex-col justify-between bg-white md:w-1/2 md:ml-auto md:mr-auto lg:w-[90%] lg:flex-row lg:justify-center lg:gap-[10rem] lg:pb-0 lg:mt-32">
                <article className="canada flex flex-col text-center items-center  mb-10 lg:mb-0">
                    <img className="w-3/5 bg-[url(assets/home/desktop/bg-pattern-hero-home.svg)] bg-no-repeat bg-center bg-contain lg:w-[18rem]" src="assets/shared/desktop/illustration-canada.svg " alt="canada" />
                    <h1 className="location-title uppercase text-2xl tracking-[.5rem] mt-8">Canada</h1>
                    <Link to='/locations' onClick={scrollToTop}> <button className="canada-btn upppercase uppercase text-lg bg-[#e7816b] text-white p-5 mt-8 tracking-widest rounded-lg hover:bg-opacity-[70%]">See location</button></Link>
                </article>
                <article className="canada flex flex-col text-center items-center  mb-10 lg:mb-0">
                    <img className="w-3/5 bg-[url(assets/home/desktop/bg-pattern-hero-home.svg)] bg-no-repeat bg-center bg-contain lg:w-[18rem]" src="assets/shared/desktop/illustration-australia.svg" alt="australia" />
                    <h1 className="location-title uppercase text-2xl tracking-[.5rem] mt-8">australia</h1>
                    <Link to='/locations' onClick={scrollToTop}> <button className="canada-btn upppercase uppercase text-lg bg-[#e7816b] text-white p-5 mt-8 tracking-widest rounded-lg hover:bg-opacity-[70%]">See location</button></Link>
                </article>
                <article className="canada flex flex-col text-center items-center ">
                    <img className="w-3/5 bg-[url(assets/home/desktop/bg-pattern-hero-home.svg)] bg-no-repeat bg-center bg-contain lg:w-[18rem]" src="assets/shared/desktop/illustration-united-kingdom.svg" alt="united-kingdom" />
                    <h1 className="location-title uppercase text-2xl tracking-[.5rem] mt-8">United kingdom</h1>
                    <Link to='/locations' onClick={scrollToTop}> <button className="canada-btn upppercase uppercase text-lg bg-[#e7816b] text-white p-5 mt-8 tracking-widest rounded-lg hover:bg-opacity-[70%]">See location</button></Link>
                </article>
            </section>
            <footer className="p-6 bg-black flex flex-col items-center mt-52 md:pt-6">
                <div className="black-footer text-white flex flex-col items-center mt-5 md:mt-20">
                    <div className="flex flex-col md:flex md:flex-row md:items-center md:justify-between">
                        <img className='w-4/6 pt-10 pb-10 md:w-2/6 md:pb-0 md:pt-0 self-center' src="assets/shared/desktop/logo-light.png" alt="logo-footer-dark" />
                        <div className='mobile-spacer border-b-2 border-white w-[90%] opacity-60 self-center md:hidden'></div>
                        <ul className='uppercase text-xl md:text-lg text-center leading-[4rem] pb-10 md:pb-0 flex flex-col md:flex-row md:w-1/2 md:justify-between'>
                        <Link to='/' onClick={scrollToTop}>our company</Link>
                        <Link to='/locations' onClick={scrollToTop}>locations</Link>
                        <Link to='/contact' onClick={scrollToTop}>contact</Link>
                        </ul> 
                    </div>
                    <div className="tablet-spacer md:border-b-2 md:border-white md:w-full md:mt-10 md:mb-10 md:opacity-50"></div>
                    <div className="md:flex md:self-start md:justify-between md:w-full">
                        <div className="footer-address text-center leading-8 pb-10 opacity-50 md:text-start">
                            <p className='font-semibold'>Designo Central Office</p>
                            <p>3886 Wellington Street Toronto,</p>
                            <p>Ontario M9C 3J5</p>
                        </div>
                        <div className="footer-contact text-center leading-8 pb-10 opacity-50 md:text-start">
                            <p className='font-semibold'>Contact Us (Central Office)</p>
                            <p>P : +1 253-863-8967</p>
                            <p>M : contact@designo.co</p>
                        </div>
                        <div className="footer-socials flex items-center justify-center cursor-pointer">
                            <img className='p-2' src="assets/shared/desktop/icon-facebook.svg" alt="facebook-icon" />
                            <img className='p-2' src="assets/shared/desktop/icon-youtube.svg" alt="youtube-icon" />
                            <img className='p-2' src="assets/shared/desktop/icon-twitter.svg" alt="twitter-icon" />
                            <img className='p-2' src="assets/shared/desktop/icon-pinterest.svg" alt="pinterest-icon" />
                            <img className='p-2' src="assets/shared/desktop/icon-instagram.svg" alt="instagram-icon" />
                        </div>
                    </div>
                </div>
            </footer>
    </div>
    )
}

export default Contact
