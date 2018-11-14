import React from 'react';
import Layout from '../components/layout';

// Components
// import AudioPlayer from '../components/audioPlayer/audioPlayer.component';
import Callout from '../components/callout/callout.component';
// import Countdown from '../components/countdown/countdown.component';
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
            {/* <div className={styles.logoShake}>
              <Logo fill="#000000" />
            </div> */}
            <div className={styles.logo}>
              <Logo />
            </div>
          </div>
        </h1>
        <div className={styles.calloutWrapper}>
          <Callout />
        </div>
        {/* <p className={styles.callout}>
          <span className={styles.calloutLine1}>DEBUT.ALBUM.LAUNCH</span>
          <span className={styles.calloutLine2}>SAT.NOVEMBER.24</span>
          <span className={styles.calloutLine3}>AT.SWAMPLANDS.BAR</span>
          <span className={styles.calloutLine4}>THORNBURY.VIC</span>
        </p> */}
        {/* <Countdown /> */}
        <Links />
        {/* <AudioPlayer /> */}
      </div>
    </div>
    <div className={styles.videoOverlay}></div>
    <div className={styles.background}></div>
  </Layout>
);



export default IndexPage
