"use client"
import { useSyncedIntersection } from "@/hooks/useSyncedIntersection";
import { SectionTitle } from "../components/SectionTitle";

const AboutMeSection = () => {
  const { refElement } = useSyncedIntersection({ threshold: 0.2, rootMargin: "-200px 0px 0px 0px" });

  return (
    <div ref={refElement} id="about" className="flex flex-col space-y-4 lg:space-y-0 justify-center lg:min-h-screen">
      <SectionTitle className="sticky top-0 z-10 bg-primary py-4" title="ABOUT ME" />

      <p>
        <span className="font-semibold">Hello 👋,</span>
        <br />
        I&apos;m a Fullstack Developer who finds <b>beauty</b> and <b>artistry</b> in writing code.
        I&apos;m passionate about building real-world products that not only function well but also embody thoughtful design and clean engineering.
        To me, coding is more than just logic — it&apos;s a form of expression that balances precision with creativity.
        <br />
        <br />
        Currently, I&apos;m interning at <b>Winni Code</b>, where I continue sharpening my skills in both front-end and back-end development.
        I’ve had the chance to work on a variety of meaningful projects, including a <b>Library Management System</b> and a
        <b> Point of Sale</b> (POS) platform built with <b>Laravel</b>.
        I also developed several web-based products like caturjawa.id, brajatama.com, and bbyts.com, utilizing JavaScript and <b>Next.js</b> to bring them to life.
        <br />
        <br />
        Outside of work, I enjoy hanging out with friends, reading, gaming, and staying active through sports.
        Whether I&apos;m debugging a component or exploring new game mechanics, I’m always driven by curiosity and a desire to learn.
      </p>
    </div>
  );
};

export default AboutMeSection;
