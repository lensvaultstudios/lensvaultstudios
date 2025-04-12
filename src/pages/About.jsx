import React from "react";

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
        className="w-full min-h-screen bg-[#0f0d15] pt-40 relative"
        style={{
          background: "radial-gradient(circle at top, #5598a6 0%, black 70%)",
        }}
      >
        <h1 className="font-custom1 lg:text-7xl md:text-7xl text-4xl text-center text-white">
          ABOUT US
        </h1>
        <p className="text-white text-xl md:text-2xl lg:text-2xl xl:text-2xl text-center mx-16 md:mx-40 lg:mx-64 pt-20">
          Lens Vault Studios pushes the boundaries of traditional storytelling,
          creating memorable and impactful experiences across multiple
          platforms.
        </p>
      </section>

      <section
        className="w-full min-h-screen bg-[#0f0d15] relative"
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
            <div
              key={member.name}
              className={`flex flex-col md:flex-row items-center md:items-stretch gap-6 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
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
                <h2 className="text-2xl md:text-3xl font-bold">
                  {member.name}
                </h2>
                <h3 className="text-lg md:text-xl text-gray-300">
                  {member.designation}
                </h3>
                <p className="text-base md:text-lg mt-3">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
