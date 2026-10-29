
import Hero from "./Hero";
import Services from "./Services";
import FeaturedProjects from "./FeaturedProjects";
import CTA from "./CallToAction";

const Home = () => {
  return (
    <main id="main-content">
      <Hero />
      <Services />
      <FeaturedProjects />
      <CTA />
    </main>
  );
};

export default Home;
