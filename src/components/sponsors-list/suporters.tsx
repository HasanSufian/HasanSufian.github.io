import { Sponsor } from '@site/src/pages/page/supporters';
import React from 'react';
import styles from './sponsors.module.css';


type SponsersType = {
    title?: string;
    sponsorshipUrl?:string;
    money?: string;
    sponsors?: Sponsor[];
}

export default function Supporter({ title, money, sponsors, sponsorshipUrl }: SponsersType) {
    return (
        <div>
            <h2>
                {title}
                <a href={sponsorshipUrl} className={styles.sponsorship_url}>
                    <small><code>{money}</code></small>
                </a>
            </h2>

            <ul>
                {sponsors.map(sponsor => {
                    return (
                        <li>
                            <a href={sponsor.link}><h4>{sponsor.name}</h4></a>
                        </li>
                    )
                })}
            </ul>

        </div>
    );
}