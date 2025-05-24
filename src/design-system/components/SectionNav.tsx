"use client"
import useIntersectionStore from "@/store/intersectionStore";
import Link from "next/link";
import React from "react";

export const SectionNav = () => {
  const { isIntersecting, refElement } = useIntersectionStore();
  const elementId = refElement?.id;
  const sections = [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "PROJECTS", href: "#projects" },
  ];

  return (
    <div className="hidden flex-col space-y-4 lg:flex">
      {sections.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className="group w-max flex items-center cursor-pointer space-x-3"
        >
          <div
            className={`h-[2px] transition-all ${
                isIntersecting === true && elementId?.toLowerCase() === label.toLocaleLowerCase()
                ? "w-20 bg-black"
                : "w-10 bg-slate-500 group-hover:w-[80px] group-hover:bg-black"
            }`}
          />
          <p
            className={`text-sm font-semibold transition-colors ${
              isIntersecting === true && elementId?.toLowerCase() === label.toLocaleLowerCase()
                ? "text-black"
                : "text-slate-500 group-hover:text-black"
            }`}
          >
            {label}
          </p>
        </Link>
      ))}
    </div>
  );
};
