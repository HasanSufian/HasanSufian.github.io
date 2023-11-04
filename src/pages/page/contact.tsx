import Layout from '@theme/Layout';
import React from 'react';
import styles from './page.module.css';


export default function Contact(){
    return (
        <Layout title='Contact 📧'>
            <main>
                <h1 className={styles.page_title}>Contact me</h1>
            </main>
        </Layout>
    );
}