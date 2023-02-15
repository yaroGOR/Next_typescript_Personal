import React from 'react'
import styles from '../../styles/Header.module.scss'
import { useMedia } from '../../hooks/useMedia';
import { useEffect, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useRef} from 'react';

interface IHeaderProps {
    sectionName: string;
}

interface IIconProps {
    clicked: boolean;
    onClick: ()=>void;
}

const Icon = ({clicked, onClick}:IIconProps) =>{
    if (clicked) {
        return <CloseIcon onClick={onClick}/>
    }
    else return <MenuIcon onClick={onClick}/>

}

const Header = ({ sectionName }: IHeaderProps) => {
    const width = useMedia()
    let navRef: any = useRef()
    let isMobile = (width<900) ? true : false
    const [showNav, setShowNav] = useState(true)
    useEffect(()=>{
        if (isMobile) {setShowNav(false)}
        else {setShowNav(true)}
    }, [isMobile])
    


    function changeColor() {
        if (window.pageYOffset>810) {
            navRef.current.style.color='white'
        } else {
            navRef.current.style.color='black'
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",changeColor)
        return () => {
            window.removeEventListener('scroll', changeColor)
        }
    }, [])
    return (

        <div  className={styles.container}>
            <div ref={navRef} className={styles.wrapper}>
            <span className={styles.logo}> YaroslavGorban</span>
            {isMobile && <Icon clicked={showNav} onClick={()=>{
                setShowNav(prev=>!prev)}}/>}

            {showNav && <nav>
                

                
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contacts</li>
                </ul>
            

            </nav>
}
            </div>
        </div>
    )
}

export default Header