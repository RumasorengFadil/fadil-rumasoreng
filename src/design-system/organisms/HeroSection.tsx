import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoWhatsapp } from "react-icons/bi";
import ProfileHeader from "../components/ProfileHeader";
import { Figure } from "../components/Figure";
import { SectionNav } from "../components/SectionNav";
import { IconLink } from "../components/IconLink";

export const HeroSection = () => {
  return (
    <div className="space-y-5">
      <ProfileHeader name="Fadil Rumasoreng" title="Fullstack Web Developer" />

      <Figure alt="Fadil Hijayat Rumasoreng" className="space-y-5" src="/images/common/user-photo.jpg">
        <p>
          I build accessible, pixel-perfect digital <br /> experiences for the web.
        </p>
      </Figure>

      <SectionNav />

      <div className="flex space-x-4 py-2">
        <IconLink target="__blank" href="https://github.com/RumasorengFadil">
          <AiFillGithub className="hover:text-slate-500 transition-all" size={24} />
        </IconLink>
        <IconLink target="__blank" href="https://www.linkedin.com/in/fadil-hijayat-rumasoreng-4944671b9/">
          <AiFillLinkedin className="hover:text-slate-500 transition-all" size={24} />
        </IconLink>
        <IconLink target="__blank" href="https://www.instagram.com/fadilrumasoreng/?hl=en">
          <AiOutlineInstagram className="hover:text-slate-500 transition-all" size={24} />
        </IconLink>
        <IconLink target="__blank" href="https://wa.me/6285244682780?text=">
          <BiLogoWhatsapp className="hover:text-slate-500 transition-all" size={24} />
        </IconLink>
      </div>
    </div>
  );
};
