import { AppsItemType } from '@site/src/components/apps-item/apps_item';
import Layout from '@theme/Layout';
import React from 'react';



export default function AppPage(AppItem: AppsItemType) {
    return (
        <Layout title={AppItem.title} description={AppItem.desc}>
            <main>
                <div>
                    <img src={AppItem.imgUrl} alt={`${AppItem.title} icon`} />
                    <h1>{AppItem.title}</h1>
                    <h3>{AppItem.desc}</h3>
                </div>
            </main>
        </Layout>
    );
}