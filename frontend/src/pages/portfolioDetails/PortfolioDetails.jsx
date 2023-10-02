import iconZoom from "../../assets/images/zoom-white.png";
import "./portfolioDetails.scss";
import { useState } from "react";
import PopupImages from "../../components/popupImages/PopupImages";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Fragment } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

const PortfolioDetails = () => {
  const [index, setIndex] = useState(0);
  const [openPopup, setOpenPoup] = useState(false);
  const { id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    const getProject = async () => {
      try {
        const { data } = await axios.get(`/projects/get-project/${id}`);
        setProject(data.project);
      } catch (error) {
        console.log(error);
      }
    };
    id ? getProject() : null;
  }, []);
  return (
    <Fragment>
      {project ? (
        <div className="portfolio_details mt-[160px]">
          <div className="container m-auto">
            <div className="head">
              <span className="subtitle">{project.type}</span>
              <h2 className="title">{project.title}</h2>
              <p className="desc max-w-[700px] m-auto text-gray-300">
                {project.description}
              </p>
            </div>
            {project.videos &&
              project.videos.map((item) => {
                return (
                  <div className="w-full container_video">
                    {/* <ReactPlayer
                      controls
                      width={"100%"}
                      height={"100px"}
                      playing={false}
                      url={`https://player.vimeo.com/video/${item}`}
                    /> */}

                    <iframe src={`https://player.vimeo.com/video/${item}`} />
                  </div>
                );
              })}
            <div className="images grid grid-cols-1">
              {project?.images?.length > 0
                ? project.images.map((img, index) => {
                    return (
                      <div
                        className="image"
                        key={index}
                        onClick={() => {
                          setOpenPoup(true);
                          setIndex(index);
                          console.log(openPopup);
                        }}
                      >
                        <img src={img} alt="img" loading="lazy" />
                        <div className="icon_zoom">
                          <img src={iconZoom} alt="icon" />
                        </div>
                      </div>
                    );
                  })
                : "Loading..."}
            </div>
          </div>
          {openPopup && (
            <PopupImages
              index={index}
              setIndex={setIndex}
              setOpenPoup={setOpenPoup}
              openPopup={openPopup}
            />
          )}
        </div>
      ) : (
        "Loading"
      )}
    </Fragment>
  );
};

export default PortfolioDetails;
