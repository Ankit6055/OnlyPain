import React from "react";

export default function Hero() {
  const painColor = "#00aff0";
  return (
    <section id="home" className="relative h-170">
      <div className="absolute inset-0 bg-black"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to Only<span style={{ color: painColor }}>Pain</span>
        </h1>
        <p className="text-xl text-white mb-6 max-w-lg text-center">
          The exclusive platform where you can experience and enjoy content
          featuring life's most hilariously painful moments.
        </p>
        <div className="flex space-x-4">
          <button
            className="py-3 px-6 rounded-lg text-white font-medium"
            style={{ backgroundColor: painColor }}
          >
            Subscribe Now
          </button>
          <button
            className="py-3 px-6 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition"
            onClick={() => {
              const aboutSection = document.getElementById("explore");
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
