import React from 'react';
import video from 'assets/video/main_vd.mp4';
import UiUnderlineLink from 'components/atoms/UiUnderlineLink';
import styles from '@scss_view/main/mainFullSlide/template/VideoSection.module.scss';

const VideoSection = () => {
  return (
    <div className={styles.vdSlide}>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4"></source>
      </video>
      <div className={styles.desc}>
        <span>8th New Collection</span>
        <h2>BREEZE OF NEW CHANGE</h2>
        <p>
          Face the breeze of change
          <br />
          and step out of your comfort zone
        </p>
        <UiUnderlineLink color="white" text={'Go Shop >'} />
      </div>
    </div>
  );
};

export default VideoSection;
