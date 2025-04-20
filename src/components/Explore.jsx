import React from "react";

export default function Explore() {
  const painColor = "#00aff0";
  const featuredPosts = [
    {
      id: 1,
      title: "Piyush Sir's Reaction to Zara's 'Teaching Style'",
      description: "Watch Piyush struggle to maintain eye contact as Zara 'explains' Python loops while winking. Spoiler: He compiles errors just to escape.",
      likes: 777,
      comments: 131,
      imageUrl: "img/piyushSirLaptop.png",
      premium: true
    },
    {
      id: 2,
      title: "Zara Has a Crush on Piyush Sir… and His Voice",
      description: "ASMR video of Zara listening to Piyush explain binary trees on 0.5x speed. Includes whispered comments: 'His voice… so… monotone… sexy…'",
      likes: 2024,
      comments: 505,
      imageUrl: "img/zaraStare.png",
      premium: false
    },
    {
      id: 3,
      title: "Piyush Sir Vibe Coding with Zara (OnlyPains Edition)",
      description: "He tries to debug Java while she 'helps' by resting her chin on his shoulder. Watch him type `System.exit(0)` out of desperation.",
      likes: 3000,
      comments: 999,
      imageUrl: "img/piyushSirPic.png",
      premium: true
    },
    {
      id: 4,
      title: "Zara Loving Piyush Sir's 'Coding Speed' 😏",
      description: "She stares intensely as he types 80 WPM. 'So… fast… so… efficient…' she murmurs. Piyush responds by enabling keypress sounds.",
      likes: 4040,
      comments: 1010,
      imageUrl: "img/zara.png",
      premium: true
    },
    {
      id: 5,
      title: "Piyush Sir Proposes with Red Roses (and a Stack Overflow Link)",
      description: "In a dramatic gesture, he kneels and offers roses… then whispers, 'Merge conflict resolved. Will you `git commit` to me?'",
      likes: 5000,
      comments: 1337,
      imageUrl: "img/piyushSirRoses.png",
      premium: false
    },
    {
      id: 6,
      title: "Zara Proposes Back: 'Marry Me or I `rm -rf` Your Heart'",
      description: "She crashes his live stream with a custom kernel panic screen: 'Kernel Love Error: Reboot into Marriage Mode?'",
      likes: 6969,
      comments: 1984,
      imageUrl: "img/zaraRoses.png",
      premium: true
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Explore Pain Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-65 object-fit"
                />
                {post.premium && (
                  <div className="absolute top-2 right-2 bg-yellow-400 text-black rounded-full py-1 px-3 text-xs font-bold">
                    PREMIUM
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <span className="flex items-center text-gray-500">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {post.likes}
                    </span>
                    <span className="flex items-center text-gray-500">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 3a2 2 0 012-2h8a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V3zm2-1a1 1 0 00-1 1v14a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H6z" />
                        <path d="M10 8a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {post.comments}
                    </span>
                  </div>

                  <button
                    className="py-1 px-4 rounded-full text-white font-medium text-sm"
                    style={{ backgroundColor: painColor }}
                  >
                    Unlock
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
