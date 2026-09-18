import Hero from "./Hero";
import Services from "./Services";
import Statistics from "./Statistics"
import FeaturedProjects from "./FeaturedProjects";
import UsersTable from "./UsersTable";

const Home = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <Services />
      <FeaturedProjects />
      <UsersTable />
    </>
  );
};

export default Home;
