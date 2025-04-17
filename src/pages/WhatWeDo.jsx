const WhatWeDo = () => {
  const services = [
    {
      title: "Non-fiction",
      logo: "/non-fiction.png",
      items: ["Lifestyle", "Travel", "Sports", "Food "],
    },
    {
      title: "Fiction",
      logo: "/fiction.png",
      items: [
        "Horror",
        "Action/Adventure",
        "Comedy",
        "Thriller/Mystery",
        "Romance",
        "Historical",
        "Fantasy",
      ],
    },
    {
      title: "Branded content",
      logo: "/brand.png",
      items: [
        "Adventure",
        "AV",
      ],
    },
    {
      title: "User Generated Content",
      logo: "/user.png",
      items: [
        "Influencer Content", "Talent Shows", "Short Film Festival"
      ],
    },
  ];

  return (
    <div
      className="w-full min-h-screen bg-[#0f0d15] pt-40 relative flex flex-col items-center pb-20"
      style={{
        background: "radial-gradient(circle at top, #5598a6 0%, black 70%)",
      }}
    >
      <h1 className="font-custom1 lg:text-7xl md:text-7xl text-4xl text-center text-white mb-12">
        WHAT WE DO
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 px-6 md:px-24 lg:px-32 w-full max-w-7xl pt-20 md:pt-15">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative backdrop-blur-lg bg-white/10  rounded-xl shadow-lg p-6 
  flex flex-col items-center text-center text-white min-h-[20rem] flex-grow 
  transition-transform duration-300 hover:-translate-y-4 z-0"
          >
            {/* Floating Logo */}
            <div className="absolute -top-12 w-32 h-32 flex items-center justify-center z-50 bg-transparent">
              <img
                src={service.logo}
                alt={service.title}
                className="w-64 h-64 object-contain"
              />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold mt-12 font-custom2">{service.title}</h2>

            {/* List of Services */}
            <ul className="mt-4 space-y-2 text-md text-white font-custom2">
              {service.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
