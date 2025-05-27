import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SkillBadgeList from "../components/SkillBadgeList";
import ProjectsListProps from "@/typedata/ProjectListProps";

const ShowcaseList = ({ items, directionWhenViewSm = "row" }: { items: ProjectsListProps[], directionWhenViewSm?: string }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="flex flex-col space-y-12">
            {items.map(({ title, description, skills, link, image }, i) => (
                <Link
                    target="_blank"
                    href={link}
                    key={i}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`group flex flex-col-reverse gap-4 transition-all sm:p-4 rounded-md cursor-pointer sm:flex-${directionWhenViewSm} sm:gap-0 sm:space-x-10
            ${hoveredIndex !== i && hoveredIndex !== null ? "lg:opacity-40" : ""}
            ${hoveredIndex === i ? "lg:bg-slate-400 lg:shadow-lg" : ""}
          `}
                >
                    <div className="relative w-36 h-20">
                        <Image
                            className="rounded-lg border-2 border-slate-500"
                            src={`/${image}`}
                            alt={title}
                            fill
                            priority
                        />
                    </div>

                    <div className="flex flex-col flex-1 space-y-3">
                        <div className="flex items-center space-x-1 text-lg font-semibold">
                            <h1>{title}</h1>
                            <span className={`transition-all ${hoveredIndex === i ? "translate-x-2" : ""}`}>{"->"}</span>
                        </div>
                        <p>{description}</p>
                        <SkillBadgeList skills={skills} />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ShowcaseList;
