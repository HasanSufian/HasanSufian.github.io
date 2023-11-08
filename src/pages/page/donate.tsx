import Layout from '@theme/Layout';
import React from 'react';
import styles from './page.module.css';

export default function Donate() {
    return (
        <Layout title='Donate ❤'>
            <main className={styles.page_body}>
                <h1 className={styles.page_title}>Donate ❤</h1>
                <p>
                    I’m a full-time open-sourcerer and my work is funded by the community.
                    Read more about me and what I do.
                </p>
                <p>
                    If you or your company are using any of my projects, consider supporting me so I can continue my open source work.
                </p>
                <h2>Monthly donations</h2>
                <ul>
                    <li><a href='https://github.com/sponsors/HasanSufian' className={styles.link}>Github Sponsers</a></li>
                    <li><a href='https://www.buymeacoffee.com/HassanSofyan' className={styles.link}>Buy Me a Coffee</a></li>
                </ul>

                <h2>One-time donations</h2>
                <ul>
                    <li><a href='https://github.com/sponsors/HasanSufian' className={styles.link}>Github Sponsers</a></li>
                    <li><a href='https://www.buymeacoffee.com/HassanSofyan' className={styles.link}>Buy Me a Coffee</a></li>
                </ul>

                <h2>Buy my apps</h2>
                <p>You can also support me by buying my apps.</p>
                <p>A nice review on the App Store is also a good way to support my work.</p>
                <ul>
                    <li><a href='#' className={styles.link}>Mahfaza</a></li>
                    <li><a href='#' className={styles.link}>Daleel</a></li>
                    <li><a href='#' className={styles.link}>Rocket</a></li>
                </ul>
            </main>
        </Layout>
    );
}