import React from 'react'
import styles from '../../styles/Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.container}>
            <p>
                Thanks fot your attantion

            </p>
            <div className={styles.wrapper}>
                <ul className={styles.links}>
                    <li className={styles.link}>linkedin</li>
                    <li className={styles.link}>Github</li>
                    <li className={styles.link}>donwloadcv</li>

                </ul>
                <div className={styles.location}> 
                           Ukraine, Kyiv
                </div>
                
            </div>

        </div>
    )
}

export default Footer