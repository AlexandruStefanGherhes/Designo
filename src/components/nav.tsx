import { useState } from "react"
import {Link,NavLink} from 'react-router-dom'

type MyState = {
    isOpen: boolean
}

function Nav() {
    const [open,setOpen] = useState<MyState>({isOpen:false})
    const toggleState = () =>{
        setOpen(prev=> ({...prev, isOpen: !prev.isOpen }))

    }
return (
<>
    <nav className="nav flex items-center justify-between p-4 pt-11 pb-11 lg:pl-14 lg:pr-14 lg:pb-16">
        <div className="logo w-2/3 md:w-1/4 lg:w-1/6">
            <Link to='/'><img src="assets/shared/desktop/logo-dark.png" alt="logo" /></Link>
        </div>
        <div className="tablet-desktop-menu text-black text-xl uppercase hidden md:block ">
            <NavLink to='/' className="ml-6 tracking-widest">Our Company</NavLink>
            <NavLink to='/locations' className="ml-6 tracking-widest">Locations</NavLink>
            <NavLink to='/contact' className="ml-6 tracking-widest">Contact</NavLink>
        </div>
        <button className="md:hidden" onClick={toggleState}>
            <img src="assets/shared/mobile/icon-hamburger.svg" alt="menu" />
        </button>
    </nav>
    <div className={`menu ${open.isOpen ? "block" : "hidden"} h-lvh bg-black bg-opacity-30 absolute top-28 right-0 left-0 bottom-0 md:hidden `} >
        <div className={`bg-[#1D1C1E] text-white text-2xl p-4 h-60 flex flex-col justify-around uppercase`}>
            <NavLink to='/' onClick={toggleState} className={({isActive})=>isActive ? 'color-[#E7816B]' : ''}>Our Company</NavLink>
            <NavLink to='/locations' onClick={toggleState} className={({isActive})=>isActive ? 'color-[#E7816B]' : ''}>Locations</NavLink>
            <NavLink to='/contact' onClick={toggleState} className={({isActive})=>isActive ? 'color-[#E7816B]' : ''}>Contact</NavLink>
        </div>
    </div>
</>
)
}

export default Nav
