import Layout from '@theme/Layout';
import React from 'react';
import styles from './page.module.css';

export default function Courses(){
    return (
        <Layout title='Courses'>
            <main>
                <h1 className={styles.page_title}>Courses</h1>
            </main>
        </Layout>
    );
}