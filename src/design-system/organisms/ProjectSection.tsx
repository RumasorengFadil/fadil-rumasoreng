"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSyncedIntersection } from "@/hooks/useSyncedIntersection";
import { SectionTitle } from "../components/SectionTitle";
import ProjectsListProps from "@/typedata/ProjectListProps";
import ShowcaseItemContent from "../molecules/ShowCaseItemContent";

const ProjectSection = ({ projects }: { projects: ProjectsListProps[] }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { refElement } = useSyncedIntersection({ threshold: 0.1, rootMargin: "0px 0px -300px 0px" });

    return (
        <div id="projects" ref={refElement} className="flex flex-col space-y-4">
            <SectionTitle className="sticky top-0 z-10 bg-primary py-4" title="PROJECTS" />


            <div className="flex flex-col space-y-12">
                {projects.map(({ title, description, skills, link, image }, i) => (
                    <Link
                        target="_blank"
                        href={link}
                        key={i}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`group flex flex-col-reverse gap-4 transition-all sm:p-4 rounded-md cursor-pointer sm:flex-row sm:gap-0 sm:space-x-10
            ${hoveredIndex !== i && hoveredIndex !== null ? "lg:opacity-40" : ""}
            ${hoveredIndex === i ? "lg:bg-slate-400 lg:shadow-lg" : ""}
          `}>
                        <div className="relative w-36 h-20">
                            <Image className="rounded-lg border-2 border-slate-500" src={"/" + image} alt={title} fill priority />
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

export default ProjectSection;
