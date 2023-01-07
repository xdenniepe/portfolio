import React from "react";
import { Logocss3, Logodocker, Logohtml5, Logojava, Logojavascript, Logomysql, Logonodedotjs, Logoreact, Logotypescript, Logovuedotjs } from "../icons"


const skills = [
    {
        logo: <Logohtml5 className="w-auto h-auto p-6 icon-background" fill="white" />,
        skil_name: "HTML5",
        count: 86,
    },
    {
        logo: <Logocss3 className="w-auto h-auto p-6 icon-background" fill="white" />,
        skil_name: "CSS3",
        count: 86,
    },
    {
        logo: <Logojava className="w-auto h-auto p-6 icon-background" fill="white" />,
        skil_name: "Java",
        count: 86,
    },
    {
        logo: <Logonodedotjs className="w-auto h-auto p-6 icon-background" fill="white" />,
        skil_name: "NodeJS",
        count: 86,
    },
    {
        logo: <Logojavascript className="w-auto h-auto p-6 icon-background" fill="white" />,
        skil_name: "JavaScript",
        count: 86,
    },
    {
        logo: <Logotypescript className="w-auto h-auto p-6 icon-background" fill="white" />,
        skil_name: "TypeScript",
        count: 86,
    },
    {
        logo: <Logoreact className="w-auto h-auto p-6 icon-background" fill="white" />,
        skil_name: "React",
        count: 86,
    },
    {
        logo: <Logovuedotjs className="w-auto h-auto p-6 icon-background" fill="white" />,
        skil_name: "VueJS",
        count: 86,
    },
    {
        logo: <Logomysql className="w-auto h-auto p-6 icon-background" fill="white" />,
        skil_name: "MySQL",
        count: 86,
    },
    {
        logo: <Logodocker className="w-auto h-auto p-6 icon-background" fill="white" />,
        skil_name: "Docker",
        count: 86,
    },
];

const Skills: React.FC = () => {

    return (
        <section id="skills" className="py-10 relative">
            <div className="mt-8 text-gray-100 text-center justify-center items-center">
                <h3 className="text-4xl font-semibold">
                    <span className="text-cyan-600">My Knowledge</span>
                </h3>
                <div className="flex items-center justify-center content-center mt-12 px-36 gap-20 flex-wrap">
                    {skills?.map((skill, i) => (
                        <div
                            key={i}
                            className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
                        >
                            <div
                                style={{
                                    background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                                }}
                                className="w-32 h-32 flex items-center justify-center rounded-full"
                            >
                                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                                    {skill.logo}
                                </div>
                            </div>
                            <p className="text-xl mt-3">{skill.skil_name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;