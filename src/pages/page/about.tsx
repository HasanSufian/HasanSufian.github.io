import Layout from '@theme/Layout';
import React from 'react';
import styles from './page.module.css';


export default function About() {
    return (
        <Layout title='About me'>
            <main className={styles.page_body}>
                <h2 className={styles.page_title}>About Hasan Sofian</h2>
                <p>
                    I’m a full-time open-source developer. In 2017, I quit my office job to do open-source.
                    I have since settled in Alexandria, but I’m still doing open-source all day.
                    In early 2020, I became fully funded by the community.
                </p>

                <p>
                    My current focus is on android app development with flutter, Node.js-based packages and CLI tools.
                    I actively maintain 100+ npm packages and many popular projects.
                </p>
                {/* <h2>More</h2>
                <ul>
                    <li>Interviewed by Indie Dev Monday</li>
                    <li>Interviewed by Between the Wires</li>
                    <li>Answering Anything & Everything</li>
                </ul> */}

                <h2>Links</h2>
                <a href='https://github.com/HasanSufian/'><li>GitHub</li></a>
                {/* <a href='#'><li>Instagram</li></a> */}
                <a href='https://www.linkedin.com/in/hasansofian'><li>LinkedIn</li></a>
            </main>
        </Layout>
    );
}