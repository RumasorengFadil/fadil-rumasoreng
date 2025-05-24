"use client"
import { useSyncedIntersection } from "@/hooks/useSyncedIntersection";

const AboutMeSection = () => {
  const { refElement } = useSyncedIntersection({ threshold: 0.7 });

  return (
    <div ref={refElement} id="about" className="flex flex-col space-y-8 lg:space-y-0 lg:items-center lg:flex-row lg:min-h-screen">
      <div className="font-semibold sticky top-0 bg-primary py-4 lg:hidden">ABOUT</div>
      <p>
        I'm a Fullstack Developer who finds <b>beauty</b> and <b>artistry</b> in writing code.
        I’m passionate about building real-world products that not only function well but also embody thoughtful design and clean engineering.
        To me, coding is more than just logic — it's a form of expression that balances precision with creativity.
        <br />
        <br />
        Currently, I'm interning at <b>Winni Code</b>, where I continue sharpening my skills in both front-end and back-end development.
        I’ve had the chance to work on a variety of meaningful projects, including a <b>Library Management System</b> and a
        <b> Point of Sale</b> (POS) platform built with <b>Laravel</b>.
        I also developed several web-based products like caturjawa.id, brajatama.com, and bbyts.com, utilizing JavaScript and <b>Next.js</b> to bring them to life.
        <br />
        <br />
        Outside of work, I enjoy hanging out with friends, reading, gaming, and staying active through sports.
        Whether I'm debugging a component or exploring new game mechanics, I’m always driven by curiosity and a desire to learn.
      </p>
    </div>
  );
};

export default AboutMeSection;
