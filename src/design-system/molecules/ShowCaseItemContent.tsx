// components/ShowcaseItemContent.tsx
import React from "react";
import SkillBadgeList from "../components/SkillBadgeList";

type ShowcaseItemContentProps = {
  title: string;
  description: string;
  skills: string[];
  isHovered?: boolean;
};

const ShowcaseItemContent = ({ title, description, skills, isHovered = false }: ShowcaseItemContentProps) => {
  return (
    <div className="flex flex-col flex-1 space-y-3">
      <div className="flex items-center space-x-1 text-lg font-semibold">
        <h1>{title}</h1>
        <span className={`transition-all ${isHovered ? "translate-x-2" : ""}`}>{"->"}</span>
      </div>
      <p>{description}</p>
      <SkillBadgeList skills={skills} />
    </div>
  );
};

export default ShowcaseItemContent;
