import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const teamMembers = [
    {
      name: "Ajay Devgn",
      designation: "Chairman",
      image: "/ajay.jpg",
      description:
        "Ajay Devgn, a celebrated 4 times national award winning actor. He is also known as director and producer, and serves as the Chairman of Lens Vault Studios. With over three decades in the entertainment industry, he brings unparalleled expertise and vision to the company. Under his leadership, Lens Vault Studios is committed to pioneering innovative storytelling by blending creativity with cutting-edge technology. As a veteran filmmaker and entrepreneur, Ajay Devgn ensures the company’s focus on delivering high-quality, engaging content that resonates with modern audiences. His strategic guidance empowers the team to push creative boundaries, making Lens Vault Studios a dynamic force in the evolving digital content landscape.",
    },
    {
      name: "Danish Devgn",
      designation: "CEO",
      image: "/danish.jpg",
      description:
        "Danish Devgn is the CEO of Lens Vault Studios, a next-gen content creation company merging creativity with technology to redefine storytelling. With a background in filmmaking and production, he ensures each project resonates with audiences through innovative, immersive narratives. Under his leadership, the company pushes creative boundaries, crafting impactful stories that empower brands, creators, and businesses in the digital age.",
    },
    {
      name: "Rajesh Chandrashekar",
      designation: "Business Head",
      image: "/rajesh.jpg",
      description:
        "Seasoned Professional and Entrepreneur with over 30 years of experience leading marketing, sales, and business functions across diverse industry verticals. Held key leadership roles in various companies, driving growth, innovation, and large-scale team leadership.",
    },
    {
      name: "Parag Desai",
      designation: "Head Of Operations",
      image: "/parag.jpg",
      description:
        "Parag Desai, Founder and CEO of Universal Communications, has been a leading force in film publicity and reputation management for over 30 years. His sharp industry insight and forward-thinking strategies have set new benchmarks, establishing Universal Communications as a powerhouse in entertainment marketing. Expanding his influence in the industry, he has also ventured into film production, bringing his expertise to the creative side of cinema. With a keen interest in the evolving landscape of content through LVS, he recognizes its vast potential in this dynamic space. Leveraging his extensive experience, he aims to shape and guide this new era of content consumption, ensuring diverse stories reach audiences in innovative and impactful ways.",
    },
    {
      name: "Kisheta Paarth Dave",
      designation: "Project Manager",
      image: "/kisheta.jpg",
      description:
        "A dedicated film enthusiast, currently serving as the Project Manager at Lens Vault Studios. Her professional journey encompasses roles as both in the Creative Department and Project Manager, reflecting a harmonious blend of creativity and strategic planning. Her expertise lies in transforming conceptual ideas into executed projects, utilizing her technical proficiency to craft compelling narratives that resonate with audiences.",
    },
  ];

  return (
    <div>
      <section
        className="w-full min-h-screen bg-[#0f0d15] pt-40 px-0 md:px-16"
        style={{
          background: "radial-gradient(circle at top, #5598a6 0%, black 70%)",
        }}
      >
       
        <h1 className="font-custom1 text-white text-4xl md:text-6xl lg:text-7xl text-center mb-12">
          ABOUT US
        </h1>

        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          
          <div className="w-full md:w-[55%] font-custom2 text-white text-center md:text-left md:pl-6 px-6">
            <p className="text-lg md:text-xl leading-relaxed text-justify">
              Lens Vault Studios pushes the boundaries of traditional
              storytelling, creating memorable and impactful experiences across
              multiple platforms. At the heart of our work lies a powerful blend
              of creativity and cutting-edge technology. From conceptualization
              to execution, we push the boundaries of traditional storytelling
              to deliver content that captivates, inspires, and leaves a lasting
              impression—across every platform and screen. <br />
              Whether you're building a brand, launching a campaign, or telling
              your story, Lens Vault Studios is your creative partner in shaping
              content that truly resonates.
            </p>
          </div>

          
          <div className="w-full md:w-[40%] flex justify-center md:justify-end">
            <img
              src="/1.png"
              alt="Lens Vault Studios"
              className="h-[300px] md:h-[400px] lg:h-[400px] w-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section
        className="w-full min-h-screen bg-[#0f0d15] relative pt-10 md:pt-20 overflow-x-hidden"
        style={{
          background:
            "radial-gradient(circle at bottom, #5598a6 0%, black 70%)",
        }}
      >
        <h1 className="font-custom1 lg:text-7xl md:text-7xl text-4xl text-center text-white">
          People
        </h1>

        <div className="mt-10 max-w-5xl mx-auto space-y-10 md:space-y-14 px-6 md:px-0 pb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className={`flex flex-col md:flex-row items-center md:items-stretch gap-6 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{
                x: index % 2 === 0 ? -200 : 200, // Start position based on side
                opacity: 0,
              }}
              whileInView={{
                x: 0, // Move to center when in view
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 25,
                duration: 1.5, // Duration of the animation
              }}
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <div
                className={`w-full md:w-1/3 flex justify-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-64 md:w-56 h-auto object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-2/3 text-white flex flex-col justify-center text-center md:text-justify leading-relaxed md:leading-loose">
                <h2 className="text-2xl md:text-3xl font-bold font-custom2">
                  {member.name}
                </h2>
                <h3 className="text-lg md:text-xl text-gray-300 font-custom2">
                  {member.designation}
                </h3>
                <p className="text-base md:text-lg mt-3 font-custom2">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
