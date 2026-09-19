import Hero from "./Hero";
import Services from "./Services";
import Statistics from "./Statistics"
import FeaturedProjects from "./FeaturedProjects";
import CTA from "./CallToAction"

const Home = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <Services />
      <FeaturedProjects />
      <CTA />
    </>
  );
};

export default Home;
