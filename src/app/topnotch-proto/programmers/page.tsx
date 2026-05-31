"use client";

import Image from 'next/image'
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

const info = [
  { name : "Jose Diablo | alias : DEL DIABLO", profession : "UI/UX Master", description : "The best UI/UX programmer in Mexico and one of the best programmers in North America", link : "/jose.png" },{ name : "Gloria Fables", profession : "Full-Stack Devloper", description : "She has up to date info on Next.Js and React with Docker and MongoDB.", link : "/gloria.png" },{ name : "Jack Heffings", profession : "The Best At Marketing", description : "An absolute master at marketing and advertising and he's also our lead marketer",link : "/jack.png" },{ name : "Amir Hakimi", profession : "Animation Deisgner For Our Websites", description : "Makes some of the best animations that exist",link : "/amir.png" },{ name : "Nana Kirushiru", profession : "A True Artist", description : "A master at CSS, PostCSS, SASS and frameworks like Bootstrap, TailwindCSS and Radix UI.",link : "/nana.png" },{ name : "Tom Smith | alias : LOLLYGAG", profession : "Full Frontend Devolper", description : "The best frontend devolper ever; has worked on some of the most visted websites", link : "/tom.png" },{ name : "Vladmir Varkszi | alias : МИРОТВОРЦ ( Meaning : The Peacemaker )", profession : "Pro Backend DEV", description : "has mastered all the technoligies in the backend field think of any backend tech and this guy will know it, both know it and has mastered it whatever if its ExpressJS, NextJS, Laravel, PHP, Django, NodeJS just whatever.", link : "/vladmir.png" },{ name : "John Doe (don't ask any questions about his name he is a true artist)", profession : "Master programmer", description : "The CEO of Topnotch INC and the genius behind our websites and a great leader that leads us to sucsess", link : "/john.png" },
];

export default function ProgrammersList() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>(".scramble-text")
        .forEach((el) => {
          const finalText = el.dataset.text || "";

          gsap.to(el, {
            duration: 2,

            scrambleText: {
              text: finalText,
              chars: "XO01",
              speed: 0.3,
              revealDelay: 0.5,
            },

            ease: "none",

            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          });
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
    <div className="container-fluid my-5 pt-5">
        <h1 className="display-5 michroma-regular text-center fw-bold text-dark ">
        Our Team Of Talented Programmers
      </h1>
    </div>
    <div className="container row mx-auto michroma-regular py-5">

      {info.map((programmer) => (
        <div
          className="card col-6 shadow-lg border-0 p-4 mb-5"
          key={programmer.name}
        >
          <div className="card-body">
            <h1
              className="card-title text-info fw-bold scramble-text"
              data-text={programmer.name}
            >
              Loading...
            </h1>

            <h4
              className="card-subtitle text-muted my-3 scramble-text"
              data-text={programmer.profession}
            >
              Loading...
            </h4>

            <p
              className="card-text text-primary fs-5 scramble-text"
              data-text={programmer.description}
            >
              Loading...
            </p>
            <div className="image-wrapper">
  <Image
    src={programmer.link}
    alt={programmer.name}
    fill
    className="image"
  />
</div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}