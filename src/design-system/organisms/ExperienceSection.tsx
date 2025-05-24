"use client"
import React, { useState } from "react";
import Link from "next/link";
import SkillBadgeList from "../components/SkillBadgeList";
import Image from "next/image";
import { useSyncedIntersection } from "@/hooks/useSyncedIntersection";

type Experience = {
    time: string;
    title: string;
    description: string;
    skills: string[];
    link: string;
    logo?: string;
};

type ExperienceListProps = {
    experiences: Experience[];
};

const ExperienceSection: React.FC<ExperienceListProps> = ({
    experiences,
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { refElement } = useSyncedIntersection({ threshold: 0.1, rootMargin:"0px 0px -200px 0px" });


    return (
        <div id="experience" ref={refElement} className="flex flex-col space-y-4">
            <div className="font-semibold sticky top-0 bg-primary opacity-95 py-4 lg:hidden">EXPERIENCES</div>

            <div className="flex flex-col space-y-12">
                {experiences.map(({ time, title, description, skills, link, logo }, i) => (
                    <Link
                        href={link}
                        target="_blank"
                        key={i}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`group flex transition-all lg:p-4 rounded-md cursor-pointer flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-10
            ${hoveredIndex !== i && hoveredIndex !== null ? "lg:opacity-40" : ""}
            ${hoveredIndex === i ? "lg:bg-slate-400 lg:shadow-lg" : ""}
          `}
                    >
                        <div className="flex flex-col basis-28 space-y-4 lg:space-y-0">
                            <div className="flex text-sm text-slate-500 py-1">{time}</div>
                            <div className="flex lg:items-center lg:justify-center h-full">
                                <Image className={`${!logo ? "hidden" : ""}`} src={"/" + logo} alt="bbyts" width={48} height={0} />
                            </div>
                        </div>

                        <div className="flex flex-col flex-1 space-y-3">
                            <div className="flex items-center space-x-1 text-lg font-semibold">
                                <h1>{title}</h1>
                                <span className={`transition-all ${hoveredIndex === i ? "translate-x-2" : ""}`}>
                                    {"->"}
                                </span>
                            </div>
                            <p>{description}</p>
                            <SkillBadgeList skills={skills} />
                        </div>
                    </Link>
                ))}
            </div>

            <p className="font-medium cursor-pointer">View Full Resume {"->"}</p>
        </div>
    );
};

export default ExperienceSection;
