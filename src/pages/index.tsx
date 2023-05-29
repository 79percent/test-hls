import styles from './index.less';
import * as React from 'react';
import { useState, useEffect } from 'react';
import hlsjs from 'hls.js';

export default function IndexPage() {

  useEffect(() => {
    const video = document.getElementById('video') as HTMLMediaElement;
    const videoSrc = 'http://127.0.0.1:8080/test.m3u8';
    if (hlsjs.isSupported()) {
      const hls = new hlsjs();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
    }
  }, []);

  return (
    <div>
      <video 
        id="video" 
        autoPlay
        className={styles.video}
        controls
      ></video>
    </div>
  );
}
