import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import PortfolioDetails from "../pages/portfolioDetails/PortfolioDetails";
import Portfolio from "../pages/portfolio/Portfolio";
import ContactMe from "../pages/contactMe/ContactMe";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projectDetails/:id" element={<PortfolioDetails />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </div>
  )
}

export default Routers
