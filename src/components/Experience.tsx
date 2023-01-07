import React, { useEffect, useState } from "react";

const experiences = [
    {
      position: 'Product Manager',
      company: 'Hooli Software',
      details: [
        'Created and maintained technical documentation, improving onboarding time for new developers by 30% and effectively leading a team in the documentation process.',
        'Led a team demonstrating strong project management skills and the ability to guide others towards a common goal.',
      ],
      date: 'Oct 2022 - Present',
      img: 'https://scontent.fmnl22-1.fna.fbcdn.net/v/t39.30808-6/292026440_401518208663534_5154405409961551016_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF9KU_ybu1Iv1YSkdPpJWp2RNM_KtsGhLZE0z8q2waEto36th6fsQKvyN7QYWuzAbY&_nc_ohc=zFu5WYilOOgAX8th_KO&_nc_ht=scontent.fmnl22-1.fna&oh=00_AfA5b8LugwUya9K0PpBu3gxCNXn6LM2kzOqnaVWDk1XaSA&oe=63BD5866',
    },
    {
      position: 'Software Engineer, Team Lead',
    //   company: 'Hooli Software',
      details: [
        'Managed a team of junior developers and provided guidance and mentorship to ensure the successful and timely completion of the project.',
        'Successfully led the development and maintenance of e-commerce platforms and effectively managed a team in the execution of these projects.',
      ],
      date: 'Jul 2021 - Oct 2022',
    //   img: '',
    },
    {
      position: 'Software Engineer',
    //   company: 'Hooli Software',
      details: [
        'Developed and maintained over software modules, including libraries, frameworks, and applications',
        'Utilized agile methodologies to deliver high-quality software on tight deadlines.',
        'Collaborated with cross-functional teams to define and implement solutions to complex business problems',
      ],
      date: 'Nov 2020 - July 2021',
      companyUrl: "http://www.sorceotech.com/"
    },
    {
      position: 'Associate Business Intelligence Analyst',
      company: 'GoWireless Philippines OPC',
      details: [
        'Designing and maintaining data systems and databases; this includes fixing coding errors and other data-related problems.',
        'Creating Data Automation and Updating data on open data portal programmatically.',
      ],
      date: 'Aug 2018 - Nov 2020',
      img: 'https://scontent.fmnl22-1.fna.fbcdn.net/v/t39.30808-6/275803159_7385947091475871_7888009800003449581_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHafkhIxxw0yD5Jv-Nu-9fxf8yMo2NeWHx_zIyjY15YfJ8prEvmIhY8e-AqVg5WVIc&_nc_ohc=BZ-7e8zu62AAX_WnIJE&_nc_ht=scontent.fmnl22-1.fna&oh=00_AfB4PbsrG4GyfJ-udHJiU93PCJtrvzpcqAMJtzppbLZ0Mg&oe=63BD6E07',
      companyUrl: "https://upstox.com/"
  
    },
  ];

const Experience: React.FC = () => {

    return (
        <div className=" max-w-6xl mx-auto p-5 py-20" id="experience">
            {experiences.map((exp) => {
                return (
                    <div className="w-full shadow-md p-5 rounded-lg mb-10" key={exp.date}>
                        <div className=" grid md:grid-cols-4 gap-4 md:order-2">
                            <div
                                className={`w-full h-40 flex items-center justify-center my-auto hover:scale-105 transform transition ease-in cursor-pointer ${exp.company ? 'rounded -mx-4' : ''}`}
                            >
                                <img
                                    className="max-h-full max-w-full rounded-md"
                                    src={
                                        exp.img ||
                                        'https://icons.veryicon.com/png/o/miscellaneous/zr_icon/company-23.png'
                                    }
                                    alt=""
                                ></img>
                            </div>
                            <div className="md:col-span-3 space-y-4 my-auto">
                                <div className="text-lg md:text-2xl text-cyan-500">{exp.company}</div>
                                <div className="md:flex justify-between">
                                    <div className="text-xl text-slate-500 ">{exp.position}</div>
                                    <div className=" text-slate-400">{exp.date}</div>
                                </div>
                                <div className=" text-gray-400 font-extralight text-sm">
                                    <ul className="list-disc">
                                        {exp.details.map((detail, index) => (
                                            <li key={`details_${index}`}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default Experience;