import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative w-full h-auto">
      {/* Full-Screen Video Section */}
      <section className="relative w-full min-h-screen">
        {/* Desktop Video (visible on md and up) */}
        <video
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/logo-animation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mobile Video*/}
        <video
          className="block md:hidden absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/home-mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section
        className="w-full min-h-screen bg-[#0f0d15] relative"
        style={{
          background: "radial-gradient(circle at top, #5598a6 0%, black 70%)",
        }}
      >
        <h1 className="font-custom1 pt-40 lg:text-7xl md:text-7xl text-3xl text-center text-white">
          OPENING THE VAULT
        </h1>

        {/* Centered Image with Less Spacing */}
        <div className="flex justify-center items-center pt-10 mt-6 mb-6">
          <img
            src="/home.png"
            alt="Centered Image"
            className="w-180 h-auto"
          />
        </div>

        <p className="text-white text-xl md:text-2xl lg:text-2xl xl:text-2xl text-center pt-20 pb-20 mx-16 md:mx-40 lg:mx-64">
          A dynamic content creation company blending creativity and technology
          to craft immersive narratives that empower brands, creators, and
          businesses, delivering impactful stories across digital platforms.
        </p>
      </section>
    </div>
  );
};

export default Home;
