import React, { useEffect, useState } from 'react'
import styles from '../../styles/ProjectCard.module.scss'
import Image from 'next/image'
import Tag from '../Tag/Tag'
import { useMedia } from '../../hooks/useMedia';

interface PCardProps {
    type: string;
}
const ImageSection = () => {
    return (
        <div className={styles.imageSection}>
            <Image src="" alt="sa" />
            sda
        </div>
    )

}
const DescriptionSection = () => {
    return (
        <div className={styles.descriptionSection}>
            <h2>Name</h2>
            <div className={styles.tagsList}>
                <Tag>React</Tag>
                <Tag>React</Tag>
                <Tag>React</Tag>

            </div>
            <div className={styles.description}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eos id in, suscipit eveniet ex qui ducimus quasi sed, iusto error, aut quod commodi doloremque culpa rem unde beatae deserunt.</div>
            <ul className={styles.links}>
                <li className={styles.link}>Github</li>
                <li className={styles.link}>Demo</li>
            </ul>
        </div>
    )

}

const ProjectCard = ({ type = "right" }: PCardProps) => {

    const width = useMedia()

    let leftChild: React.ReactNode
    let rightChild: React.ReactNode

    if (width < 962) {
        leftChild = <ImageSection />
        rightChild = <DescriptionSection />


    } else {



        if (type === 'left') {
            leftChild = <ImageSection />
            rightChild = <DescriptionSection />

        } else if (type === 'right') {
            leftChild = <DescriptionSection />
            rightChild = <ImageSection />

        }
    }

    return (
        <div className={styles.container}>
            {leftChild}
            {rightChild}
        </div>
    )
}

export default ProjectCard