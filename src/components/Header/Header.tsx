import React from 'react'
import styles from '../../styles/Header.module.scss'
import { useMedia } from '../../hooks/useMedia';
import { useEffect } from 'react';

interface IHeaderProps {
    sectionName: string;
}

const Header = ({ sectionName }: IHeaderProps) => {
    const width = useMedia()
    let isMobile = (width<900) ? true : false
    useEffect(()=>{
        console.log(isMobile)
    }, [isMobile])
    return (

        <div className={styles.container}>
            <div className={styles.wrapper}>
            <span className={styles.logo}> YaroslavGorban</span>
            <nav>
                <div/>
                <div/>
                <div/>
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contacts</li>
                </ul>

            </nav>
            </div>
        </div>
    )
}

export default Header