import React from 'react';

const VideoSection = () => (
  <section className="relative w-full h-screen overflow-hidden">
    <video 
      className="w-full h-full object-cover" 
      autoPlay 
      loop 
      muted 
    >
      <source 
        src="https://www.apple.com/105/media/ww/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/xlarge.mp4" 
        type="video/mp4" 
      />
      Your browser does not support the video tag.
    </video>
  </section>
);

export default VideoSection;

