import { AppsItemType } from '@site/src/components/apps-item/apps_item';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './app_page.module.css';



export default function AppPage(AppItem: AppsItemType) {
    return (
        <Layout title={AppItem.title} description={AppItem.desc}>
            <main>
                <section>
                    <article>
                        <header className={styles.app_page_header}>
                            <img src="https://sindresorhus.com/apps/ai-actions/icon.png" width={'224'} height={'224'} />
                            <h1>AI Actions</h1>
                            <h2>AI actions for the Shortcuts app</h2>
                            <nav className={styles.first_nav}>
                                <a href="#">
                                    <img src="https://sindresorhus.com/assets/download-on-app-store-badge.svg" />
                                </a>
                            </nav>
                            <nav className={styles.second_nav}>
                                <a href="#" className={styles.second_nav_item}>
                                    macOS version
                                </a>
                                <a href="#" className={styles.second_nav_item}>
                                    FAQ
                                </a>
                                <a href="#" className={styles.second_nav_item}>
                                    Support
                                </a>
                            </nav>

                        </header>
                    </article>

                </section>
            </main>
        </Layout>
    );
}