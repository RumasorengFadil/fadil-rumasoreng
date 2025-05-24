// components/SkillBadgeList.tsx
import React from "react";

type SkillBadgeListProps = {
  skills: string[];
};

const SkillBadgeList: React.FC<SkillBadgeListProps> = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="px-2 py-1 bg-tertiary text-white rounded-full text-sm"
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export default SkillBadgeList;