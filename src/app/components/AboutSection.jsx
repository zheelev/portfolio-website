"use client"
import Reactm, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { motion } from "framer-motion";

const skills = [
    { name: "HTML", level: 75 },
    { name: "CSS", level: 75 },
    { name: "JavaScript", level: 75 },
    { name: "Bootstrap", level: 25 },
    { name: "Next.js", level: 25 },
    { name: "React.js", level: 25 },
    { name: "Figma", level: 75 },
];

const education = [
    {
        year: "2011 - 2015",
        university: "Software Engineering",
        place: "Odessa National Technical University, Odessa (Ukraine)",
        degree: "- Bachelor",
    },
    {
        year: "2015 - 2016",
        university: "System software",
        place: "Odessa National Technical University, Odessa (Ukraine)",
        degree: "- Specialist",
    },
    {
        year: "2017 - 2018",
        university: "Computer and software engineering",
        place: "Technical University - Sofia, Sofia (Bulgaria)",
        degree: "- Master",
    },
];

const certificates = [
    "/images/certificates/certificate-soft.jpg",
    "/images/certificates/certificate-soft.jpg",
];


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="grid grid-cols-2 gap-6">
                {skills.map((skill) => (
                    <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-white">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <motion.div
                                className="bg-[#E02E2E] h-3 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.5 }}
                            ></motion.div>
                        </div>
                    </div>
                ))}
            </div>
        ),
    },

    {
        title: "Education",
        id: "education",
        content: (
            <div className="relative ml-6 pl-6">
                <motion.div
                    className="absolute left-3 top-0 w-1 h-full bg-[#E02E2E]"
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
                {education.map((edu, index) => (

                    <motion.div
                        key={index}
                        className="relative mb-8"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.3 }}
                    >

                        <motion.div
                            className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-[#E02E2E]  rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.3 }}
                        />

                        <div className="pl-8">
                            <p className="text-sm text-gray-500">{edu.year}</p>
                            <h3 className="text-lg font-semibold">{edu.university}</h3>
                            <p className="text-gray-600">{edu.place}</p>
                            <p className="text-gray-500 italic">{edu.degree}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

        ),
    },

    {
        title: "Certificate",
        id: "certificate",
        content: (
            <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {certificates.map((image, index) => (
                        <div
                            key={index}
                            className="relative cursor-pointer"
                        >
                            <Image
                                src={image}
                                alt={`Certificate ${index + 1}`}
                                width={300}
                                height={300}
                                className="object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>


            </div>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white h-745px" id="about">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                <div className="lg:col-span-3 p-6 text-white">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-lg">Hello! My name is Anatolii, and I am a junior front-end developer. I work with HTML, CSS, JavaScript, and I’m actively learning React and Next.js. I also have experience with Bootstrap and am studying Tailwind CSS. Additionally, I am proficient in Figma and Photoshop, which helps me create user-friendly and visually appealing interfaces.
                        What I enjoy the most is creating something new — it’s what keeps me motivated to keep moving forward. In my free time, I love spending time with my child, which gives me energy and inspiration.
                    </p>
                </div>

                <div className="lg:col-span-3 md:grid md:grid-cols-1 lg:grid-cols-2 lg:gap-4">
                    <div className=" w-full h-[70vh] md:h-[70vh] lg:h-[55vh] bg-cover bg-center">
                        <Image
                            src="/images/aboutImg.png"
                            alt="aboutImg"
                            width={600}
                            height={600}
                        />
                    </div>

                    <div className=" text-white w-full ">
                        <div className="flex flex-row mt-8">
                            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> {" "} Skills {" "} </TabButton>
                            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> {" "} Education {" "} </TabButton>
                            <TabButton selectTab={() => handleTabChange("certificate")} active={tab === "certificate"}> {" "} Certificate {" "} </TabButton>
                        </div>
                        <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                    </div>
                </div>
            </div>


        </section>

    );
};

export default AboutSection;
