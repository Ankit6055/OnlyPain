import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Explore from "./components/Explore";
import Testimonial from "./components/Testimonial";
import Team from "./components/Team";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <section id="home">
        <Hero />
      </section>

      <section id="explore">
        <Explore />
      </section>

      <section id="testimonials">
        <Testimonial />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="cta">
        <CTA />
      </section>

      <section id="about">
        <About />
      </section>

      <Footer />
    </>
  );
}

export default App;
