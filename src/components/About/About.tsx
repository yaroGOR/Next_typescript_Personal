import React from 'react'
import styles from '../../styles/About.module.scss'
import SectionHeader from '../SectionHeader/SectionHeader'
import Painting from '../PaintingComponent/Painting'
const About = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <SectionHeader>Hello im yarik</SectionHeader>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque doloribus reprehenderit itaque fugiat minima vel quas vero laborum, quia saepe pariatur ab! Minus, cumque odit fugiat laborum quia commodi consectetur? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat eaque impedit eveniet nemo, explicabo tempora, perspiciatis ad et laboriosam quis ratione nobis error minima delectus voluptatem eos praesentium blanditiis itaque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora nihil saepe atque neque dignissimos eaque nostrum odio, reiciendis tenetur magnam illum blanditiis commodi esse cumque iure amet, dolorem natus!</p>
        </div>
        <div className={styles.wrapper}>
            <Painting/>
        </div>
    </div>
  )
}

export default About