import { Fragment } from "react";
import Hero from "../../components/hero/Hero";
import ProjectsSection from "../../components/projectsSection/ProjectsSection";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <ProjectsSection /> 
    </Fragment>
  );
};

export default Home;
