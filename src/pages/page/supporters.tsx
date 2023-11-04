import Layout from '@theme/Layout';
import React from 'react';
import styles from './page.module.css';
import Sponsers from '@site/src/components/sponsors-list/sponsors-list';


export type Sponsor = {
    name?: string;
    logoUrl?: string;
    link?: string;
}

const sponsors: Sponsor[] = [
    {
        name: 'Github',
        logoUrl: 'https://sindresorhus.com/assets/thanks/github-logo.svg',
        link: 'https://github.com/',
    },
    {
        name: 'Retool',
        logoUrl: 'https://sindresorhus.com/assets/thanks/retool-logo.svg',
        link: 'https://retool.com/?utm_campaign=sindresorhus',
    },
    {
        name: 'WorkOS',
        logoUrl: 'https://sindresorhus.com/assets/thanks/workos-logo-white-bg.svg',
        link: 'https://workos.com/',
    },
    {
        name: 'strapi',
        logoUrl: 'https://sindresorhus.com/assets/thanks/strapi-logo.svg',
        link: 'https://strapi.io/?ref=sindresorhus',
    },
]


export default function Supporters() {
    return (
        <Layout title='Supporters' description='Thank you for support 🙌'>
            <main className={styles.donate_page_body}>
                <h1 className={styles.page_title}>Thanks 🙌</h1>
                <p>
                    I’m truly grateful to all the wonderful humans and companies supporting my open source work on GitHub Sponsors and Open Collective.
                </p>
                <Sponsers title='🦄 Sponsors' money='$1000/month' sponsors={sponsors} sponsorshipUrl={`#`}/>

            </main>
        </Layout>
    );
}