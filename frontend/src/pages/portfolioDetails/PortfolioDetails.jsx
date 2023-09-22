import iconZoom from "../../assets/images/zoom-white.png";
import imgProject1 from "../../assets/images/project-1.jpeg";
import imgProject2 from "../../assets/images/project-2.jpeg";
import imgProject3 from "../../assets/images/project-3.jpeg";
import imgProject4 from "../../assets/images/project-4.jpeg";
import imgProject5 from "../../assets/images/project-5.jpeg";
import imgProject6 from "../../assets/images/project-6.jpeg";
import "./portfolioDetails.scss"
import { useState } from "react";
import PopupImages from "../../components/popupImages/PopupImages";

const PortfolioDetails = () => {
  const [index, setIndex] = useState(0)
  const [openPopup, setOpenPoup] = useState(false)

  const images = [
    imgProject1,
    imgProject2,
    imgProject3,
    imgProject4,
    imgProject5,
    imgProject6,
    imgProject1,
    imgProject2,
    imgProject3,
  ];
  return (
    <div className="portfolio_details mt-[160px]">
      <div className="container m-auto">
        <div className="head">
          <span className="subtitle">BrandIdentity</span>
          <h2 className="title">EllieCashman</h2>
        </div>
        <div className="main_img">
          <img src={imgProject3} alt="img-project" loading="lazy" /> 
        </div>
        <div className="images grid grid-cols-1 md:grid-cols-2 gap-5">
          {images.length > 0
            ? images.map((img, index) => {
                return (
                  <div className="image" key={index} onClick={() => {
                    setOpenPoup(true)
                    setIndex(index)
                    console.log(openPopup)
                  }}>
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
              {openPopup && <PopupImages index={index} setIndex={setIndex} setOpenPoup={setOpenPoup} openPopup={openPopup} /> }
    </div>
  );
};

export default PortfolioDetails;
