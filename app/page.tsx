"use client";
import React, { useState,useEffect } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import SparkleSection from "@/components/ui/SparkleSection";
import passport from '@/public/image.jpg'
import { FloatingNav } from "@/components/ui/floating-navbar";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import nextjs from '@/public/nextjs.png'
import reactnative from '@/public/reactnative.png'
import c from '@/public/c.png'
import java from '@/public/java.png'
import python from '@/public/python.svg'
import cplus from '@/public/C++.png'
import { HoverEffect } from "@/components/ui/card-hover-effect";

import '@/app/globals.css'

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#project",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const otherSkills = [
    { name: "Firebase", image: "/firebase.png" },
    { name: "Supabase", image: "/supabase.png" },
    { name: "Figma", image: "/figma.png" },
    { name: "React js", image: "/reactnative.png" },
    { name: "Javascript", image: "/js.png" },
    { name: "Tailwind CSS", image: "/tailwind.png" },
    { name: "Bootstrap", image: "/bootstrap.svg" },
    { name: "SQL", image: "/sql.png" },
  ];

  useEffect(() => {
    const handleSmoothScroll = (e:any) => {
      const href = e.currentTarget.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById('result');
  
    if (result) {
      result.innerHTML = "Please wait...";
    }
  
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });
  
      const data = await response.json();
  
      if (response.status === 200) {
        if (result) {
          result.innerHTML = data.message;
        }
        form.reset();
      } else {
        if (result) {
          result.innerHTML = data.message;
        }
      }
    } catch (error) {
      console.error(error);
      if (result) {
        result.innerHTML = "Something went wrong!";
      }
    }
  
    setTimeout(() => {
      if (result) {
        result.innerHTML = "";
      }
    }, 5000);
  };


  return (
    <div id="home">
      <div className="relative w-full">
        <FloatingNav navItems={navItems} />
        {/* <SparkleSection title="Welcome to my portfolio" /> */}
        <div id="about" className="h-screen flex flex-col lg:flex-row md:flex-row justify-around items-center md:flex text-center">
          <div className="flex flex-col ">
          <h2 className="poppins-semibold text-gray-400 text-6xl pb-1">
            Myself
          </h2>
          <h2 className="poppins-semibold text-gray-300 text-6xl pb-4 lg:text-7xl md:text-7xl">
            Indrajith S Nair 
          </h2>
          <h3 className="poppins-semibold text-gray-400 text-4xl p-2">
            Full Stack Developer 
          </h3>
          <h3 className="poppins-semibold text-gray-400 text-4xl p-2">
            Programmer 
          </h3>
          <h3 className="poppins-semibold text-gray-400 text-4xl p-2">
            Web Designer 
          </h3>
          </div>
          <div className="bg-white rounded-full overflow-hidden w-[17rem] h-[17rem]">
            <Image src={passport} alt={"Passport size photo"} className=""/>
          </div>
        </div> 

        <div id="skills" className="h-230">
          <h1 className="poppins-medium text-center text-6xl mb-12">Skills</h1>
          <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center gap-10 mb-4">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black dark:bg-zinc-900 w-[300px] h-[500px]">
        <Image
          src={nextjs}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          Next js
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-justify">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black dark:bg-zinc-900 w-[300px] h-[500px]">
        <Image
          src={reactnative}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          React Native
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-justify">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black dark:bg-zinc-900 w-[300px] h-[500px]">
        <Image
          src={c}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          C
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-justify">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        
      </BackgroundGradient>
          </div>
          <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center gap-10">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black dark:bg-zinc-900 w-[300px] h-[500px]">
        <Image
          src={java}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          Java
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-justify">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black dark:bg-zinc-900 w-[300px] h-[500px]">
        <Image
          src={python}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          Python
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-justify">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black dark:bg-zinc-900 w-[300px] h-[500px]">
        <Image
          src={cplus}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          C++
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-justify">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        
      </BackgroundGradient>
          </div>
        </div>

        <div className="h-160 mt-20"> 
  <h1 className="poppins-medium text-center text-4xl">Other skills include</h1>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 mt-8 px-20 ">
    {otherSkills.map((skill, index) => (
      <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-white p-5">
        <div className="h-[13rem] bg-black p-4">
          <img src={skill.image} alt={skill.name} className="w-full h-full object-contain  "/>
        </div>
        <div className="p-4  bg-black text-center">
          <h3 className="text-white text-lg font-semibold ">{skill.name}</h3>
        </div>
      </div>
    ))}
  </div>
</div>


      <div id ="project" className="h-210 mt-10">
        <h1 className="poppins-medium text-center text-5xl">Projects</h1>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>

      <div id="contact" className="h-screen flex justify-center items-center bg-black">
  <div className="w-full max-w-md bg-black rounded-lg shadow-md p-8 border border-white">
    <h3 className="text-2xl font-semibold text-center mb-6 poppins">Contact me</h3>
    <form id="contactForm" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input type="hidden" name="access_key" value="f7b04d5c-c752-4b90-9a8f-ac26db592e69"/>
        <label htmlFor="Name" className="block text-white text-sm font-bold mb-2 poppins">
          Your name
        </label>
        <input
          type="text"
          id="Name"
          name="Name"
          className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Email" className="block text-white text-sm font-bold mb-2 poppins">
          Your email address
        </label>
        <input
          type="email"
          id="Email"
          name="Email"
          className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="Message" className="block text-white text-sm font-bold mb-2 poppins">
          Your message
        </label>
        <textarea
          id="Message"
          name="Message"
          rows={6}
          className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
          required
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full poppins"
        >
          Send Message
        </button>
      </div>
    </form>
    <div id="result" className="mt-4 text-white text-center"></div>
  </div>
</div>

  <div className="h-[10rem] flex flex-col lg:flex-row justify-around items-center bg-gray-950 border-t-2 border-gray-400">
    <div>Indrajith's Portfolio</div>
    <div className="flex flex-col gap-4 ">
      <a href='https://github.com/Indrajiths4'>Github</a>
      <a href='https://www.linkedin.com/in/indrajith-s-nair-05710a265/'>Linkedin</a>
    </div>
  </div>    


      </div>
    </div>
    
  );
}


const projects = [
  {
    title: "Curently",
    description:
      "A Home Energy Monitoring IOT system where owners can monitor there Energy usage and get insights through an App.",
    link: "https://github.com/Indrajiths4/Curently/tree/main",
    image: '/curently.jpg'
  },
  {
    title: "Digital Menu",
    description:
      "A Food ordering website where the people can order food when in a restaurent without the need of the waiter.",
    link: "https://tva-digital-menu.netlify.app/",
    image: '/digitalmenu.png'
  },
  {
    title: "Employee Task",
    description:
      "An efficient Employee task management website where employees are assigned tasks based on their availability and skills by their team lead.",
    link: "https://github.com/Indrajiths4/Task-Allocation-System",
    image: '/taskallocator.png'
  },
  {
    title: "Apple clone",
    description:
      "A website that resembles Apple website showcasing their real products.",
    link: "https://indrajiths4.github.io/Tech-Landing-Page/",
    image: '/appleclone.png'
  },
  {
    title: "Figma Netflix Clone",
    description:
      "A Netflix UI made in figma.",
    link: "https://www.figma.com/design/Wheycqj3nQuqebi2TLLcay/Netflix?node-id=0-1&t=DdIxWsxIww4V9qdq-0",
    image: '/figmanetflix.png'
  },
  {
    title: "Tic Tac Toe",
    description:
      "The famous Tic Tac Toe game which is made using React",
    link: "https://indrajiths4.github.io/tictactoe-react/",
    image: '/tictactoereact.png'
  },
];
