import React from "react";

const testimonials = [
  {
    name: "Ankit",
    comment: "I don't know how I got here but these comments hurt more than JavaScript callbacks",
    avatar: "https://avatars.githubusercontent.com/u/127339696?v=4",
  },
  {
    name: "Nikhil",
    comment: "Beta, shaadi kar le. Even your code wants you to settle down now",
    avatar: "https://avatars.githubusercontent.com/u/155902231?v=4",
  },
  {
    name: "Sandeep",
    comment: "Piyush's love life has fewer commits than his abandoned side projects",
    avatar: "https://avatars.githubusercontent.com/u/115567883?v=4",
  },
  {
    name: "Surya",
    comment: "Piyush Sir's coding streams are my romantic comedies",
    avatar: "https://avatars.githubusercontent.com/u/154448136?v=4",
  },
  {
    name: "Mihir",
    comment: "Watching Piyush Sir resist Zara is my daily dose of pain",
    avatar: "https://avatars.githubusercontent.com/u/32175682?v=4",
  },
  {
    name: "Aditya",
    comment: "Hitesh Sir's marriage advice hits harder than Piyush Sir's segfaults",
    avatar: "https://avatars.githubusercontent.com/u/175517999?v=4",
  }
];

export default function Testimonial() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-center">
            What Our Users Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-lg overflow-hidden shadow-lg p-6 text-center"
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                <h4 className="text-xl font-bold">{testimonial.name}</h4>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
