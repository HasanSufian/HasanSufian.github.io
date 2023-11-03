import React from 'react';
import styles from './apps_item.module.css';
import Link from '@docusaurus/Link';

export type AppsItemType = {
    imgUrl?: string;
    appPageUrl?: string;
    title?: string;
    desc?: string;
    os?: string[];
};

export default function AppsItem(AppsItem: AppsItemType) {
    return (
        <div className={styles.app_container}>
            <div className={styles.app_img_container}>
                <img src={AppsItem.imgUrl} alt={`${AppsItem.title} icon`} />
            </div>
            <div className={styles.content_container}>
                <h1>{AppsItem.title}</h1>
                <h4 className={styles.app_desc}>{AppsItem.desc}</h4>
                <div className={styles.osRow}>
                    {AppsItem.os.map(os => {
                        return (
                            <p className={styles.osItem}>{os}</p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}