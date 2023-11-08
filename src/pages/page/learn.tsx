import Layout from '@theme/Layout';
import React from 'react';
import styles from './page.module.css';
import clsx from 'clsx';

export default function Learn() {
    return (
        <Layout title='Learn 💡'>
            <main className={styles.page_body}>
                <h1 className={styles.page_title}>Learn</h1>
                <Section
                    title='Courses'
                    items={[
                        { title: 'Card 1', imgSrc: 'image1.jpg' },
                        { title: 'Card 2', imgSrc: 'image2.jpg' },
                        { title: 'Card 3', imgSrc: 'image3.jpg' },
                        { title: 'Card 3', imgSrc: 'image3.jpg' },
                        { title: 'Card 3', imgSrc: 'image3.jpg' },
                        // add more
                    ]}
                />
                <Section
                    title='How to'
                    items={[
                        { title: 'Card 1', imgSrc: 'image1.jpg' },
                        { title: 'Card 2', imgSrc: 'image2.jpg' },
                        { title: 'Card 3', imgSrc: 'image3.jpg' },
                        // add more
                    ]}
                />
            </main>
        </Layout>
    );
}


interface SectionProps {
    title?: string;
    items?: { title: string; imgSrc: string }[];
}

function Section({ title, items }: SectionProps) {
    return (
        <div className="section">
            <h2>{title}</h2>
            <div className={clsx("card-list", styles.sectionList)}>
                {items.map((item, index) => (
                    <div className="card" key={index}>
                        <img src={item.imgSrc} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}