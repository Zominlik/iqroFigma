import { memo, useState } from 'react'
import Navbar from './Navbar'
import ModalItem from './ModalItem'
import IQROLogo from './IQROLogo'
import burgerlogo from '../assets/Logos/burgerLogo.png'

const Header = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <header className="header select-none relative sticky top-0 bg-green-700 z-10 flex shadow-md sticky top-0     xs:pl-[1rem] xs:pr-[1rem] xs:p-[1rem] xs:flex xs:justify-center xs:items-center xs:gap-[5rem]         sm:pl-[3rem] sm:pr-[3rem] sm:p-[2rem] sm:flex sm:justify-center sm:items-center sm:gap-[5rem]                       md:pl-[3rem] md:pr-[3rem] md:p-[2rem] md:gap-[2rem]            lg:pl-[3rem] lg:pr-[3rem] lg:p-[2rem] lg:gap-[4rem]             xl:pl-[3rem] xl:pr-[3rem] xl:p-[2rem] xl:gap-[6rem]             xxl:pl-[6rem] xxl:pr-[6rem] xxl:p-[2rem] xxl:gap-[13rem]     ">
            <a href="#hero"><IQROLogo /></a>
            <div className='nav flex'>
                <div className="navbarWrapper hidden md:flex md:justify-between md:items-center md:gap-[4rem]      lg:flex lg:justify-between lg:items-center lg:gap-[5rem]             xl:flex xl:justify-between xl:items-center xl:gap-[6rem]        xxl:flex xxl:justify-between xxl:items-center xxl:gap-[8rem]">
                    <Navbar />
                </div>
                <div className='burgerWrapper md:hidden'>
                    {toggle ? <img src={burgerlogo} alt="burgerlogo" onClick={(prev) => { setToggle(!prev) }} className='hidden        xs:flex xs:justify-center xs:items-center xs:gap-[2rem]            sm:flex sm:justify-center sm:items-center sm:gap-[2rem]' /> : <div className=''>
                        <div className='nav-links'>
                            <ModalItem setToggle={toggle, setToggle} />
                        </div>
                    </div>}
                </div>
            </div>
        </header>
    )
}

export default memo(Header)