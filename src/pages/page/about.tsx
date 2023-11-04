import Layout from '@theme/Layout';
import React from 'react';
import styles from './page.module.css';


export default function About(){
    return (
        <Layout title='About me'>
            <main>
                <h1 className={styles.page_title}>About Hasan Sofian</h1>
            </main>
        </Layout>
    );
}