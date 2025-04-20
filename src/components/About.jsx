import React from "react";

const About = () => {
  const painStats = [
    { stat: "10,000+", label: "Hours of Pain" },
    { stat: "250+", label: "Pain Creators" },
    { stat: "5M+", label: "Monthly Views" },
    { stat: "99%", label: "Satisfaction Rate" },
  ];
  const painColor = "#00aff0";
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            About Only<span style={{ color: painColor }}>Pain</span>
          </h2>
          <p className="text-xl text-gray-600">
            Founded in 2025, OnlyPain started as a joke between friends and
            quickly became the internet's favorite destination for those who
            find humor in life's painful moments.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                OnlyPain: Where we monetize your misery so you don't have to.
                Your embarrassing fails = our viral content. You're welcome.
              </p>
              <p className="text-gray-600">
                Think of us as that friend who laughs at your pain - except we
                film it, edit it with sad music, and make money off it.
                Community building!
              </p>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src="https://www.prabhatkhabar.com/wp-content/uploads/2024/10/Puneet-Superstar.jpg"
                alt="Our Mission"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-100 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {painStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <h3 className="text-4xl font-bold mb-2">{stat.stat}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
