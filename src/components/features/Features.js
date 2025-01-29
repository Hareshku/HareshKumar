import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign, SiReact } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Services" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="Plan, create and code internet sites and web pages with modern and artful design.."
          icon={<SiReact />}
        />
        <Card
          title="App Development"
          des="Mobile application developer with knowledge of Java, Flutter and Android Studio."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Enhance your website's visibility and drive organic traffic with effective and result-driven SEO strategies."
          icon={<SiProgress />}
        />
        <Card
          title="Video Editing"
          des="Transform raw footage into captivating videos with seamless edits, creative transitions, and professional finishing touches."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Specialized in creating clean, artful design that are both intuitive and functional."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Provide reliable and secure web hosting solutions to ensure your websites run smoothly and efficiently."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features