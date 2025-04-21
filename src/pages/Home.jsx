import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const videoRef = useRef(null); // For desktop video
  const mobileVideoRef = useRef(null); // For mobile video
  const sectionRef = useRef(null); // Video section
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsMuted(!isVisible);

        if (videoRef.current) {
          videoRef.current.muted = !isVisible;
        }

        if (mobileVideoRef.current) {
          mobileVideoRef.current.muted = !isVisible;
        }
      },
      {
        threshold: 0.3, // Adjust as needed (30% in view triggers unmute)
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-auto">
      {/* Full-Screen Video Section */}
      <section ref={sectionRef} className="relative w-full min-h-screen">
        {/* Desktop Video */}
        <video
          ref={videoRef}
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          playsInline
          muted={isMuted} // dynamically control mute
        >
          <source src="/logo-animation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mobile Video */}
        <video
          ref={mobileVideoRef}
          className="block md:hidden absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          playsInline
          muted={isMuted}
        >
          <source src="/home-mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Content Section */}
      <section
        className="w-full min-h-screen bg-[#0f0d15] relative"
        style={{
          background: "radial-gradient(circle at top, #5598a6 0%, black 70%)",
        }}
      >
        <h1 className="font-custom1 pt-40 lg:text-6xl md:text-6xl text-2xl text-center text-white">
          OPENING THE VAULT
        </h1>

        <div className="flex justify-center items-center pt-10 mt-6 mb-6">
          <motion.img
            src="/home.png"
            alt="Centered Image"
            className="w-180 h-auto"
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              duration: 2,
              delay: 0.3,
            }}
            viewport={{ once: true }}
          />
        </div>

        <p className="text-white font-custom2 text-xl md:text-2xl lg:text-2xl xl:text-2xl text-center pt-20 pb-20 mx-16 md:mx-40 lg:mx-64">
          Lens Vault Studios is a new-age content creation company driven by a
          passion for fresh, immersive storytelling. We specialize in crafting
          unique and meaningful narratives that empower brands, creators, and
          businesses to connect deeply with today’s digital audiences.
        </p>
      </section>
    </div>
  );
};

export default Home;
