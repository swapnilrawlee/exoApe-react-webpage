import React, { useState } from "react";

const Work = () => {
    const [data , setData] = useState([
        {heading :"pixelflakes", subheading :"Architectural marketing agency:",images:"https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",video:"https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"},
        {heading :"pixelflakes", subheading :"Architectural  agency:",images:"https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",video:"https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"},
        {heading :"pixelflakes", subheading :"Architectural marketing :",images:"https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",video:"https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"},
        {heading :"pixelflakes", subheading :" marketing agency:",images:"https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",video:"https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"},
        
      ])
  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl mx-auto py-20 px-5 sm:px-10 " >
        <div className="featured flex gap-2">
          <i className="ri-star-fill"></i>
          <h1>Featured Projects</h1>
        </div>
        <h1 className="text-6xl my-5">Work</h1>
        <p className="leading-2 text-md">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit exercitationem perspiciatis accusamus.
        </p>
      </div>

   <div className="sm:flex sm:w-full sm:h-full sm:flex-wrap sm:gap-20 sm:flex-col"> 
   {data.map((d,i)=>{
    return    <div key={i} className="elems mt-10 p-5  ">
    <div className="video w-full h-[140vw] relative overflow-hidden  sm:w-1/4 sm:h-1/4 ">
      <img
        className="w-full h-full hidden sm:block object-cover "
        src={d.images}
        alt=""
      />
      <video
        className="w-full h-full block sm:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
        autoPlay
        muted
        loop
        src={d.video}
      ></video>
    </div>
    <div className="mt-4 sm:mt-0">
      <h1 className="font-semibold ">{d.heading}</h1>
      <p className="capitalize opacity-40">
      {d.subheading}
      </p>
    </div>
  </div>
   })}
   </div>
    </div>
  );
};

export default Work;
