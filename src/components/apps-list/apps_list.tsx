import React from 'react';
import styles from './apps_list.module.css';
import AppsItem, { AppsItemType } from '../apps-item/apps_item';

const apps: AppsItemType[] = [
    {
        title: 'Mahfaza',
        desc: 'Manage your money',
        imgUrl: '/static/img/apps-icons/icon-1.png',
        os: ['android', 'ios', 'free'],
        appPageUrl: '/app/app-page',
    },
    {
        title: 'Daleel',
        desc: 'Learn in one place',
        imgUrl: 'static/img/docusaurus.png',
        os: ['android', 'ios', 'paid'],
        appPageUrl: '#',
    },
    {
        title: 'Daleel',
        desc: 'Learn in one place',
        imgUrl: 'static/img/docusaurus.png',
        os: ['android', 'ios', 'paid'],
        appPageUrl: '#',
    },
    {
        title: 'Daleel',
        desc: 'Learn in one place',
        imgUrl: 'static/img/docusaurus.png',
        os: ['android', 'ios'],
        appPageUrl: '#',
    },
    {
        title: 'Daleel',
        desc: 'Learn in one place',
        imgUrl: 'static/img/docusaurus.png',
        os: ['android', 'ios'],
        appPageUrl: '#',
    },
    {
        title: 'Daleel',
        desc: 'Learn in one place',
        imgUrl: 'static/img/docusaurus.png',
        os: ['android', 'ios'],
        appPageUrl: '#',
    },
];

export default function AppsList() {
    
    return (
        <div className={styles.list}>
            {apps.map(app => {
                return <AppsItem title={app.title} desc={app.desc} imgUrl={app.imgUrl} appPageUrl={app.appPageUrl} os={app.os} />
            })}
        </div>
    );
}