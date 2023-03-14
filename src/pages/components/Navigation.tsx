import Link from "next/link";
import { handleLinkClick } from "@/utils/utils";


export default function Navigation() {
  return (
    <nav>
      <a href="#about"><span onClick={() => handleLinkClick("about")}>About</span>
        
      </a>
      <a href="#projects">
        <span onClick={() => handleLinkClick("projects")}>Projects</span>
      </a>
      <a href="#contact">
        <span onClick={() => handleLinkClick("contact")}>Contact</span>
      </a>
    </nav>
  );
}