import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

// react-player draws itself differently on the server than in the browser,
// which React 18 reports as a hydration mismatch (error #418). Render it only
// in the browser, with a placeholder of the same size so the page doesn't jump.
const WIDTH = 640;
const HEIGHT = 360;

const VideoPlayer = ({ url }) => (
  <BrowserOnly fallback={<div style={{ width: WIDTH, height: HEIGHT }} />}>
    {() => {
      const ReactPlayer = require('react-player').default;
      return <ReactPlayer controls url={url} width={WIDTH} height={HEIGHT} />;
    }}
  </BrowserOnly>
);

export default VideoPlayer;
