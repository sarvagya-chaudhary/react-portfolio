import React from "react";
import spotolet from "../assets/portfolio/spotolet.png";
import pwdmgr from "../assets/portfolio/pwdmgr.png";
import drs from "../assets/portfolio/drs.png";
import mpp from "../assets/portfolio/mpp.png";
import guessnumber from "../assets/portfolio/guessnumber.png";
import dicegame from "../assets/portfolio/dice.png";
import drumkit from "../assets/portfolio/drumkit.png";
import wpdb from "../assets/portfolio/wpdb.jpeg";
import staup from "../assets/portfolio/t1.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: spotolet,
      demo: "https://spotolet.netlify.app/",
      code: "https://github.com/sarvagya-chaudhary/spotolet-v1",
      pname: "Renting App",
    },
    {
      id: 2,
      src: pwdmgr,
      demo: "#",
      code: "https://github.com/sarvagya-chaudhary/pwd-master",
      pname: "Password Manager",
    },
    {
      id: 3,
      src: drs,
      demo: "https://sarvagya-chaudhary.github.io/drs/",
      code: "https://github.com/sarvagya-chaudhary/drs",
      pname: "Client's Portfolio",
    },
    {
      id: 4,
      src: mpp,
      demo: "https://sarvagya-chaudhary.github.io/portfolio/",
      code: "https://github.com/sarvagya-chaudhary/portfolio",
      pname: "Personal Portfolio V1",
    },

    {
      id: 5,
      src: guessnumber,
      demo: "https://sarvagya-chaudhary.github.io/gurss-my-number/",
      code: "https://github.com/sarvagya-chaudhary/gurss-my-number",
      pname: "Guess The Number",
    },
    {
      id: 6,
      src: dicegame,
      demo: "https://sarvagya-chaudhary.github.io/dice/",
      code: "https://github.com/sarvagya-chaudhary/dice",
      pname: "Dice Game",
    },
    {
      id: 7,
      src: drumkit,
      demo: "https://sarvagya-chaudhary.github.io/drumkit/",
      code: "https://github.com/sarvagya-chaudhary/drumkit",
      pname: "DrumKit",
    },
    {
      id: 8,
      src: wpdb,
      demo: "#",
      code: "#",
      pname: "Wild Plant Detection Bot",
    },
    {
      id: 9,
      src: staup,
      demo: "#",
      code: "#",
      pname: "Screen Time Analysis (Python)",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">
            Check out some of my interesting work right here
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, pname }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                className="rounded-md duration-200 hover:scale-105"
                src={src}
                alt=""
              />
              <p className="pt-3 flex items-center justify-center">{pname}</p>
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    LIVE
                  </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
