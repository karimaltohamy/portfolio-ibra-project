import React from "react";
import imgProject1 from "../../assets/images/project-1.jpeg";
import imgProject2 from "../../assets/images/project-2.jpeg";
import imgProject3 from "../../assets/images/project-3.jpeg";
import imgProject4 from "../../assets/images/project-4.jpeg";
import imgProject5 from "../../assets/images/project-5.jpeg";
import imgProject6 from "../../assets/images/project-6.jpeg";
import { Link } from "react-router-dom";
import "./portfolio.scss"
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([])

  const data = [
    {
      id: 1,
      name: "Heavensake",
      type: "Art Direction",
      img: imgProject1,
    },
    {
      id: 2,
      name: "Heavensake",
      type: "Art Direction",
      img: imgProject2,
    },
    {
      id: 3,
      name: "Heavensake",
      type: "Art Direction",
      img: imgProject3,
    },
    {
      id: 4,
      name: "Heavensake",
      type: "Art Direction",
      img: imgProject4,
    },
    {
      id: 5,
      name: "Heavensake",
      type: "Art Direction",
      img: imgProject5,
    },
    {
      id: 6,
      name: "Heavensake",
      type: "Art Direction",
      img: imgProject6,
    },
    {
      id: 7,
      name: "Heavensake",
      type: "Art Direction",
      img: imgProject1,
    },
    {
      id: 8,
      name: "Heavensake",
      type: "Art Direction",
      img: imgProject2,
    },
    {
      id: 9,
      name: "Heavensake",
      type: "Art Direction",
      img: imgProject3,
    },
    {
      id: 10,
      name: "Heavensake",
      type: "Art Direction",
      img: imgProject4,
    },
  ];

  useEffect(() => {
    const getProjects = async () => {
      try {
          const {data} = await axios.get("/projects")
          setProjects(data.projects)
      } catch (error) {
        console.log(error);
      }
    }

    getProjects()
  }, [])

  return (
    <div className="portfolio_page mt-[160px]">
      <div className="container m-auto">
        <div className="boxs">
          <div className="boxs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-5">
            {projects
              ? projects.map((item, index) => {
                  return (
                    <Link
                      to={`/projectDetails/${item._id}`}
                      className="box"
                      key={index}
                    >
                      <div className="image">
                        <img src={item.mainImg} />
                      </div>
                      <div className="text">
                        <span className="type">{item.type}</span>
                        <h4 className="title">{item.title}</h4>
                        <div className="icon_arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  );
                })
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
