import React from 'react'
import styles from '../../styles/Header.module.scss'

interface IHeaderProps {
    sectionName: string;
}

const Header = ({ sectionName }: IHeaderProps) => {
    return (

        <div className={styles.container}>
            <div className={styles.wrapper}>
            <span className={styles.logo}> YaroslavGorban</span>
            <nav>
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