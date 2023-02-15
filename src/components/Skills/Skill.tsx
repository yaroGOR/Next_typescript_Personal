import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import styles from '../../styles/Skill.module.scss'
import Tag from '../Tag/Tag'
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
                <div className={styles.wrapper}>
                <div className={styles.description}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate praesentium deleniti dolorum saepe? Iste doloribus officiis tempora impedit ratione eius doloremque illum laudantium, tempore quos similique debitis maxime, temporibus placeat?
                </div>
                <div className={styles.links}>
                    <ul>
                        <li>link for roadmap</li>
                        <li>link for roadmap</li>

                    </ul>
                </div>
                </div>
                <div className={styles.tagsList}>
                    <Tag>React</Tag>
                    <Tag>React</Tag>
                    <Tag>React</Tag>
                    <Tag>React</Tag>
                    <Tag>React</Tag>

                </div>



                
            </div>
            <div className={styles.info}>If you want to get more details</div>
            </div>

        </div>
    )
}

export default Skill