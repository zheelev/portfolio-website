
"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      };
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className=" bg-clip-text text-[#E02E2E]">Hello, I'm {" "}
                        </span><br />
                        <TypeAnimation
                            sequence={[
                                'Anatolii Zhelev', 
                                1000,
                                'Web Developer', 
                                2000, 
                                'UI/UX Designer',
                                2000
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-lg sm:text-lg mb-6 lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam corrupti, ad ut adipisci, repellat alias earum nihil delectus harum totam.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#E02E2E] hover:bg-slate-200 hover:text-black"  onClick={() => scrollToSection("contact")}>Contact Me</button>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 border border-white mt-3">About Me</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                        <Image src="/images/Image.png" alt="hero image" className="relative " width={500} height={500} />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;