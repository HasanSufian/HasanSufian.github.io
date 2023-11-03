import AppsItem, { AppsItemType } from '@site/src/components/apps-item/apps_item';
import AppsList from '@site/src/components/apps-list/apps_list';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './apps.module.css';


export default function Apps(){
    return (
        <Layout title='Apps'>
            <main>
                <h1 className={styles.page_title}>Quality crafted apps</h1>
                <AppsList/>
            </main>
        </Layout>
    );
}