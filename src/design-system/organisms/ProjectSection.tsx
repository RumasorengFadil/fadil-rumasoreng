"use client"
import React, { useState } from "react";
import Link from "next/link";
import SkillBadgeList from "../components/SkillBadgeList";
import Image from "next/image";
import { useSyncedIntersection } from "@/hooks/useSyncedIntersection";

type Projects = {
    title: string;
    description: string;
    skills: string[];
    link: string;
    image?: string;
};

type ProjectsListProps = {
    projects: Projects[];
};

const ProjectSection: React.FC<ProjectsListProps> = ({
    projects,
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { refElement } = useSyncedIntersection({ threshold: 0.1, rootMargin:"0px 0px -300px 0px" });

    return (
        <div id="projects" ref={refElement} className="flex flex-col space-y-4">
            <div className="font-semibold z-10 sticky top-0 bg-primary py-4 lg:hidden">PROJECTS</div>

            <div className="flex flex-col space-y-12">
                {projects.map(({ title, description, skills, link, image }, i) => (
                    <Link
                        target="_blank"
                        href={link}
                        key={i}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`group flex flex-col-reverse gap-4 transition-all lg:p-4 rounded-md cursor-pointer lg:flex-row lg:gap-0 lg:space-x-10
            ${hoveredIndex !== i && hoveredIndex !== null ? "lg:opacity-40" : ""}
            ${hoveredIndex === i ? "lg:bg-slate-400 lg:shadow-lg" : ""}
          `}>
                        <div className="relative w-36 h-20">
                            <Image className="rounded-lg border-2 border-slate-500" src={"/" + image} alt={title} fill priority />
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

export default ProjectSection;
