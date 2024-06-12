
import React, { useState } from 'react';
import solve from '../assets/images/solve.png';
import coursera from '../assets/images/coursera.png';

const Experience = () => {

    const skills = [
        { name: 'Python', color: 'bg-primary' },
        { name: 'C++', color: 'bg-danger' },
        { name: 'VB', color: 'bg-primary' },
        { name: 'Docker', color: 'bg-success' },
        { name: '+ others', color: 'bg-default-400' },
    ];

    const badges = [
        { name: 'MySQL', color: 'bg-blue-500' },
        { name: 'JavaScript', color: 'bg-green-500' },
        { name: 'PHP', color: 'bg-red-500' },
        { name: 'DJANGO', color: 'bg-yellow-500' },
        { name: 'Git ft GitHub', color: 'bg-yellow-500' },
        { name: '+ others', color: 'bg-gray-400' },
    ];

    const [solveImageLoaded, setSolveImageLoaded] = useState(false);
    const [polystarImageLoaded, setPolystarImageLoaded] = useState(false);

    return (
        <section className="w-full py-5 min-h-full d-flex justify-content-center" >
            <div id="experience" className="md:px-24 md:pt-20 p-5">
                <h3 className="text-2xl text-success mb-5 font-bold section-titles">Where I've worked</h3>
                <div className="flex flex-wrap justify-between">
                    <div className="flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none shadow-none rounded-large transition-transform-background motion-reduce:transition-none bg-background lg:w-1/2">
                        <div className="p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large flex gap-3">
                            <div className="relative shadow-black/5 shadow-none rounded-small" style={{ maxWidth: '40px' }}>
                                <img
                                    src={solve}
                                    className={`relative z-10 ${solveImageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 rounded-small`}
                                    alt="solve it logo"
                                    height="40"
                                    width="40"
                                    onLoad={() => setSolveImageLoaded(true)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-md font-semibold text-warning">Solve it</p>
                                <p className="text-small text-slate-200 text-white">Software Developer</p>
                            </div>
                        </div>
                        <hr className="shrink-0 bg-divider border-none w-full h-divider" role="separator" />
                        <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
                            <p className="font-semibold text-success">May 2018 - Jan 2019</p>
                            <p className="text-justify text-slate-200 my-3 text-lg text-white">
                                I was Engaged in an intensive training program to develop proficiency in various programming languages, including but not limited to Python, visual basic programming and C++. I Gained hands-on experience in software development methodologies and best practices.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap border border-gray-300 text-white bg-transparent px-2 h-8 text-sm rounded-full"
                                        style={{ borderColor: skill.color === 'bg-primary' ? '#1D4ED8' : skill.color === 'bg-danger' ? '#EF4444' : skill.color === 'bg-success' ? '#10B981' : skill.color === 'bg-warning' ? '#F59E0B' : skill.color === 'bg-default-400' ? '#9CA3AF' : '#6B7280' }}
                                    >
                                        <span className={`w-2.5 h-2.5 mr-2 rounded-full ${skill.color === 'bg-primary' ? 'bg-blue-500' : skill.color === 'bg-danger' ? 'bg-red-500' : skill.color === 'bg-success' ? 'bg-green-500' : skill.color === 'bg-warning' ? 'bg-yellow-500' : skill.color === 'bg-default-400' ? 'bg-gray-400' : 'bg-gray-500'}`}></span>
                                        <span className="flex-1 text-inherit font-normal px-1">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none shadow-none rounded-large transition-transform-background motion-reduce:transition-none bg-background lg:w-1/2">
                        <div className="p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large flex gap-3">
                            <div className="relative shadow-black/5 shadow-none rounded-small" style={{ maxWidth: '40px' }}>
                                <img
                                    src={coursera}
                                    className={`relative z-10 ${polystarImageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 rounded-small`}
                                    alt="Polystar NanoTech"
                                    height="40"
                                    width="40"
                                    onLoad={() => setPolystarImageLoaded(true)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-md text-warning">Coursera</p>
                                <p className="text-small text-slate-200 text-white">Full Stack Developer</p>
                            </div>
                        </div>
                        <hr className="shrink-0 bg-divider border-none w-full h-divider" role="separator" />
                        <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
                            <p className="font-semibold text-success">Oct 2022 - Oct 2023</p>
                            <p className="text-justify text-lg my-3 text-slate-200 text-white">
                                I was also taking online courses on Coursera, that I explored web development technologies such as HTML, CSS, Javascript and Django. I contributed to web-based projects, gaining a foundational understanding of Git and GitHub, Front-end and back-end development.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {badges.map((badge, index) => (
                                    <div
                                        key={index}
                                        className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap border border-gray-300 text-white bg-transparent px-2 h-8 text-sm rounded-full"
                                    >
                                        <span className={`w-2.5 h-2.5 ml-1 rounded-full ${badge.color}`}></span>
                                        <span className="flex-1 text-inherit font-normal px-1">{badge.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Experience;

