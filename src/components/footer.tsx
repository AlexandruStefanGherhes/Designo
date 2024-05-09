import { Link } from "react-router-dom"
import scrollToTop from "./scrollToTop"
function Footer() {
  return (
    <footer className="p-6 bg-black flex flex-col items-center mt-52 md:pt-52 lg:pt-[35rem]">
        <div className="orange-footer flex flex-col items-center justify-around w-[95%] lg:w-[94.5%] bg-[#E7816B] mt-[-60%] text-center h-[23rem] p-6 pt-[2rem] pb-[2rem] rounded-xl text-white bg-[url(assets/shared/desktop/bg-pattern-call-to-action.svg)] bg-no-repeat bg-cover bg-left-bottom lg:flex-row xl:mt-[-55%]">
          <div className="lg:flex lg:flex-col lg:text-start lg:pl-16 lg:gap-6">
            <h1 className='text-3xl w-full font-semibold md:w-1/2 md:ml-auto md:mr-auto lg:ml-0 lg:mr-0 lg:w-[40%] md:text-5xl md:font-normal mb-6 lg:mb-0'>Let's talk about your project</h1>
            <p className="md:w-[70%] md:ml-auto md:mr-auto lg:ml-0 lg:mr-0 md:text-lg lg:w-[60%]">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
          </div>
            <Link to='/contact' className="w-full lg:w-1/3 lg:ml-auto" onClick={scrollToTop}><button className='bg-white text-black rounded-xl text-lg p-6 pt-4 pb-4 uppercase tracking-wide'>Get in touch</button></Link>
        </div>
        <div className="black-footer text-white flex flex-col items-center mt-5 md:mt-20  lg:w-[95%]">
          <div className="flex flex-col md:flex md:flex-row md:items-center md:justify-between lg:w-full">
            <img className='w-4/6 pt-10 pb-10 md:w-2/6 lg:w-1/6 md:pb-0 md:pt-0 self-center' src="assets/shared/desktop/logo-light.png" alt="logo-footer-dark" />
            <div className='mobile-spacer border-b-2 border-white w-[90%] opacity-60 self-center md:hidden'></div>
            <ul className='uppercase text-xl md:text-lg text-center leading-[4rem] pb-10 md:pb-0 flex flex-col md:flex-row md:w-1/2 md:justify-between lg:w-2/6'>
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
            <div className="footer-contact text-center leading-8 pb-10 opacity-50 md:text-start lg:ml-[-20rem]">
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
  )
}

export default Footer
