import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import styles from '../../styles/Skill.module.scss'
const Skill = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
            <SectionHeader>Skills</SectionHeader>
            </div>
            <div className={styles.wrapper}>     
               <div className={styles.card}>
                <div className={styles.title}>
                    React
                </div>
                <div className={styles.description}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate praesentium deleniti dolorum saepe? Iste doloribus officiis tempora impedit ratione eius doloremque illum laudantium, tempore quos similique debitis maxime, temporibus placeat?
                </div>



                
            </div>
            <div className={styles.info}>If you want to get more details</div>
            </div>

        </div>
    )
}

export default Skill