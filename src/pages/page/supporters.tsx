import Layout from '@theme/Layout';
import React from 'react';
import styles from './page.module.css';
import Sponsors from '@site/src/components/sponsors-list/sponsors-list';
import Supporter from '@site/src/components/sponsors-list/suporters';


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
    {
        name: 'SerpApi',
        logoUrl: 'https://sindresorhus.com/assets/thanks/serpapi-logo-light.svg',
        link: 'https://serpapi.com/',
    },
]


export default function Supporters() {
    return (
        <Layout title='🦄 Supporters' description='Thank you for support 🙌'>
            <main className={styles.donate_page_body}>
                <h1 className={styles.page_title}>Thanks 🙌</h1>
                <p>
                    I’m truly grateful to all the wonderful humans and companies supporting my open source work on <a href='https://opencollective.com/hasan-sofian'>GitHub Sponsors</a> and <a href='https://opencollective.com/hasan-sofian'>Open Collective</a>.
                </p>
                <Sponsors title='🦄 Sponsor' money='$1000/month' sponsors={sponsors} sponsorshipUrl={`#`}/>
                <Sponsors title='Silver Sponsor'money='$100/month' sponsors={sponsors} sponsorshipUrl='#'/>
                <Supporter title='Top Supporter' money='$50/month' sponsors={sponsors} sponsorshipUrl='#'/>
                <Supporter title='Supporter' money='$10/month' sponsors={sponsors} sponsorshipUrl='#'/>

            </main>
        </Layout>
    );
}