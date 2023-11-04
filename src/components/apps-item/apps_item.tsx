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
        <Link className={styles.app_container} to={AppsItem.appPageUrl}>
            <div className={styles.app_img_container}>
                <img src={AppsItem.imgUrl} alt={`${AppsItem.title} icon`} />
            </div>
            <div className={styles.content_container}>
                <h2>{AppsItem.title}</h2>
                <h4 className={styles.app_desc}>{AppsItem.desc}</h4>
                <div className={styles.osRow}>
                    {AppsItem.os.map(os => {
                        return (
                            <p className={styles.osItem}>{os}</p>
                        );
                    })}
                </div>
            </div>
        </Link>
    );
}