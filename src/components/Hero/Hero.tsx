import React from 'react'
import styles from '../../styles/Hero.module.scss'
import Button from '../Button/Button'

const Hero = () => {
    return (
        <div className={styles.container}>
            <h4 className={styles.smallHeader}>creative</h4>
            <h1>Fullstack developer</h1>
            <div className={styles.about}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, facilis vero! Assumenda ipsam excepturi omnis est commodi corporis, quod itaque reiciendis aliquam repellendus suscipit repudiandae natus voluptatibus odio magni laudantium!</p>
                <div className={styles.btnContainer}>     
                    <Button text={"Download CV"} />
                    <Button text={'Contact me'} />
                </div>

            </div>
        </div>
    )
}

export default Hero