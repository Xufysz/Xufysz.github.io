import React from "react";
import meImage from "../assets/images/me.jpg";
import githubImage from "../assets/images/GitHub-Mark-Light-64px.png";
import stravaImage from "../assets/images/strava.png";
import linkedinImage from "../assets/images/linkedin.png";
import Particles from "react-particles-js";

export default () => {
  return (
    <div className="sm:min-h-screen flex flex-col items-center bg-gray-900">
      <Particles
        className="absolute h-full"
        params={{
          particles: {
            number: {
              value: 18,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />

      <div className="flex flex-col sm:bg-transparent bg-gray-900 items-center h-full justify-center absolute z-10 w-full">
        <div className="flex">
          <div className="mr-3 mt-3">
            <h1 className="text-gray-200 font-bold text-4xl sm:text-7xl">
              <span>Hi,</span>
              <br />
              <span>I'm Kyle </span>
            </h1>
            <ul className="mt-3 text-gray-300 flex flex-col sm:flex-row gap-2">
              <li>Software Developer</li>
              <li>Aspiring Entrepreneur</li>
              <li>Athlete</li>
            </ul>
          </div>
          <div>
            <img className="w-[164px] h-[194px] rounded-full" src={meImage} />
          </div>
        </div>
        <div className="flex justify-around align-middle w-full sm:w-1/2 mt-5 mb-5 sm:mb-0">
          <a href="https://github.com/Xufysz" target="_blank">
            <img className="rounded-full w-[64px] h-[64px]" src={githubImage} />
          </a>
          <a
            href="https://www.linkedin.com/in/kyle-rusby-60b7b2159/"
            target="_blank"
          >
            <img className="w-[64px] h-[64px]" src={linkedinImage} />
          </a>
          <a href="https://www.strava.com/athletes/59516816" target="_blank">
            <img className="w-[64px] h-[64px]" src={stravaImage} />
          </a>
        </div>
      </div>
    </div>
  );
};
