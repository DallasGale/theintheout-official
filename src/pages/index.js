import React from 'react';
import Layout from '../components/layout';

// Components
import Callout from '../components/callout/callout.component';
import Links from '../components/links/links.component';
import Logo from '../components/logo/logo.component';

// CSS
import styles from './index.module.css';

const IndexPage = () => (
  <Layout>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}>
              <Logo />
            </div>
          </div>
        </h1>
        <div className={styles.calloutWrapper}>
          <Callout />
        </div>
        <div style={{paddingTop: 20}}>
          <iframe 
              title="Soundcloud link to album opener 'DO YOU WANNA'"
              width="100%" 
              height="120" 
              scrolling="no" 
              frameBorder="no" 
              allow="autoplay" 
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/517526952&color=%23ef6434&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">

              </iframe>
          </div>
        <Links />
      </div>
    </div>
    <div className={styles.videoOverlay}></div>
    <div className={styles.background}></div>
  </Layout>
);



export default IndexPage
