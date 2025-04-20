import React from "react";

const CTA = () => {
  const painColor = "#00aff0";
  return (
    <section className="py-16" style={{ backgroundColor: painColor }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Experience the Pain?
        </h2>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Join thousands of subscribers who can't get enough of our hilarious
          pain content. Your funny bone will thank you!
        </p>
        <button className="py-3 px-8 bg-white text-black rounded-lg font-bold hover:bg-opacity-90 transition">
          Subscribe Now
        </button>
      </div>
    </section>
  );
};

export default CTA;
