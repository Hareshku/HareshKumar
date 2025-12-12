import React from 'react'
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    des: "Plan, create and code internet sites and web pages with modern and artful design..",
    icon: <SiReact />,
  },
  {
    title: "Webhosting",
    des: "Provide reliable and secure web hosting solutions to ensure your websites run smoothly and efficiently.",
    icon: <FaGlobe />,
  },
  {
    title: "Video Editing",
    des: "Transform raw footage into captivating videos with seamless edits, creative transitions, and professional finishing touches.",
    icon: <FaMobile />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title des="My Service" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-10">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <Card
              title={service.title}
              des={service.des}
              icon={service.icon}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features
