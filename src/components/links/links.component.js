import React from 'react';
import styles from './links.module.css';
import BandcampLogo from '../../images/bandcamp-logo.png';
import EmailIcon from '../../images/email-icon.png';
import FacebookLogo from '../../images/facebook-logo.png';

const links = [
    {
        title: 'Facebook',
        url: 'http://www.facebook.com/theintheoutband',
        iconSrc: FacebookLogo,
        target: "_blank",
        rel: "noopener noreferrer",
    },
    {
        title: 'Bandcamp',
        url: 'https://theintheout.bandcamp.com',
        iconSrc: BandcampLogo,
        target: "_blank",
        rel: "noopener noreferrer"
    },
    {
        title: 'Email',
        url: 'mailto:[band][at][theintheout.com]',
        iconSrc: EmailIcon,
        target: "",
        rel: ""
    },

]

const Links = () => {
    return (
        <nav className={ styles.nav }>
            <ul className={ styles.linksList }>
                { 
                    links.map((link) => {
                        return (
                            <li key={link.title} className={ styles.linkItem }>
                                <a href={ link.url } target={link.target} rel={link.rel}>
                                    <img src={link.iconSrc} alt={link.title} />
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};


export default Links;