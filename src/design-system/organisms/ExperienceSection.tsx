"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSyncedIntersection } from "@/hooks/useSyncedIntersection";
import { SectionTitle } from "../components/SectionTitle";
import ShowcaseItemContent from "../molecules/ShowCaseItemContent";

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
    const { refElement } = useSyncedIntersection({ threshold: 0.1, rootMargin: "0px 0px -200px 0px" });


    return (
        <div id="experience" ref={refElement} className="flex flex-col space-y-4">
            <SectionTitle className="sticky top-0 z-10 bg-primary py-4" title="EXPERIENCES" />

            <div className="flex flex-col space-y-12">
                {experiences.map(({ time, title, description, skills, link, logo }, i) => (
                    <Link
                        href={link}
                        target="_blank"
                        key={i}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`group flex transition-all rounded-md cursor-pointer flex-col space-y-4 sm:p-4 sm:space-y-0 sm:flex-row sm:space-x-10
            ${hoveredIndex !== i && hoveredIndex !== null ? "lg:opacity-40" : ""}
            ${hoveredIndex === i ? "lg:bg-slate-400 lg:shadow-lg" : ""}
          `}
                    >
                        <div className="flex flex-col basis-28 space-y-4 lg:space-y-0">
                            <div className="flex text-sm text-slate-500 py-1">{time}</div>
                            <div className="flex sm:items-center sm:justify-center h-full">
                                <Image className={`${!logo ? "hidden" : ""}`} src={"/" + logo} alt="bbyts" width={48} height={0} />
                            </div>
                        </div>

                        <ShowcaseItemContent
                            title={title}
                            description={description}
                            skills={skills}
                            isHovered={hoveredIndex === i}
                        />
                    </Link>
                ))}
            </div>

            <div className="flex items-center space-x-1 group font-medium cursor-pointer underline">
                <p>View Full Resume</p>
                <div className="transition-all group-hover:translate-x-2">{"->"}</div>
            </div>
        </div>
    );
};

export default ExperienceSection;
