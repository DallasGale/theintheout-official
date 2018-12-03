import React from 'react';
import styles from './links.module.css';
import AppleMusicLogo from '../../images/apple-music-logo.png';
import BandcampLogo from '../../images/bandcamp-logo.png';
import SpotifyLogo from '../../images/spotify-logo.png';
import FacebookLogo from '../../images/facebook-logo.png';

const links = [
    {
        title: 'Bandcamp',
        url: 'https://theintheout.bandcamp.com',
        iconSrc: BandcampLogo,
        target: "_blank",
        rel: "noopener noreferrer"
    },
    {
        title: 'Apple Music',
        url: 'https://itunes.apple.com/au/album/the-in-the-out/1442046790mailto:[band][at][theintheout.com]',
        iconSrc: AppleMusicLogo,
        target: "_blank",
        rel: "noopener noreferrer"
    },
    {
        title: 'Spotify',
        url: 'https://open.spotify.com/album/4HdQLGq98sxNAhfWhD8Py2',
        iconSrc: SpotifyLogo,
        target: "_blank",
        rel: "noopener noreferrer"
    },
    {
        title: 'Facebook',
        url: 'http://www.facebook.com/theintheoutband',
        iconSrc: FacebookLogo,
        target: "_blank",
        rel: "noopener noreferrer",
    }
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