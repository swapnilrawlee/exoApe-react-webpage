import React from "react";

const Landing = () => {
  return (
    <div className="w-full h-[150vh]  sm:h-[250vh] relative">
      <div className="picture w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
      <div className="w-full top-0 absolute">

      <div className="text max-w-screen-2xl mx-auto h-full  text-white px-5 sm:px-10 ">
        <div className="para mt-72  text-white">
          <p className="text-md sm:text-xl">Lorem ipsum dolor sit amet.</p>
          <p className="text-md sm:text-xl">Lorem ipsum dolor sit amet.</p>
          <p className="text-md sm:text-xl">Lorem ipsum dolor sit amet.</p>
          <p className="text-md sm:text-xl">Lorem ipsum </p>
        </div>
        <div className="headings uppercase mt-5 sm:mt-10 text-white">
            <h1 className="text-6xl tracking-tighter leading-none sm:text-[14rem]">digital</h1>
            <h1 className="text-6xl tracking-tighter leading-none sm:text-[14rem]">design</h1>
            <h1 className="text-6xl tracking-tighter leading-none sm:text-[14rem]">experience</h1>
        </div>
        <div className="para2 mt-20 sm:w-1/3 text-white">
          <p className="text-md sm:text-xl">Lorem ipsum dolor sit amet.</p>
          <p className="text-md sm:text-xl">Lorem ipsum dolor sit amet.</p>
          <p className="text-md sm:text-xl">Lorem ipsum dolor sit amet.</p>
          <p className="text-md sm:text-xl">Lorem ipsum </p>
        </div>
        <a className="border-b-[1px] inline-block border-zinc-100 pb-1 mt-10 sm:text-xl " href="">The studio</a>
      </div>
      </div>
    </div>
  );
};

export default Landing;
