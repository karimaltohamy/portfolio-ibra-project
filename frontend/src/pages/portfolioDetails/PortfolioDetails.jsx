import iconZoom from "../../assets/images/zoom-white.png";
import imgProject1 from "../../assets/images/Artboard 1 copy 2@4x-100.jpg";
import imgProject2 from "../../assets/images/Artboard 1 copy 3@4x-100.jpg";
import imgProject3 from "../../assets/images/Artboard 1 copy 4@4x-100.jpg";
import imgProject4 from "../../assets/images/Artboard 1 copy 5@4x-100.jpg";
import imgProject5 from "../../assets/images/Artboard 1 copy 6@4x-100.jpg";
import imgProject6 from "../../assets/images/Artboard 1 copy 7@4x-100.jpg";
import imgProject7 from "../../assets/images/Artboard 1 copy 8@4x-100.jpg";
import imgProject8 from "../../assets/images/Artboard 1 copy 9@4x-100.jpg";
import imgProject9 from "../../assets/images/Artboard 1 copy 10@4x-100.jpg";
import imgProject10 from "../../assets/images/Artboard 1 copy 11@4x-100.jpg";
import imgProject11 from "../../assets/images/Artboard 1 copy 12@4x-100.jpg";
import "./portfolioDetails.scss";
import { useState } from "react";
import PopupImages from "../../components/popupImages/PopupImages";

const PortfolioDetails = () => {
  const [index, setIndex] = useState(0);
  const [openPopup, setOpenPoup] = useState(false);

  const images = [
    imgProject1,
    imgProject2,
    imgProject3,
    imgProject4,
    imgProject5,
    imgProject6,
    imgProject7,
    imgProject8,
    imgProject9,
    imgProject10,
    imgProject11,
  ];
  return (
    <div className="portfolio_details mt-[160px]">
      <div className="container m-auto">
        <div className="head">
          <span className="subtitle">BrandIdentity</span>
          <h2 className="title">EllieCashman</h2>
          <p className="desc max-w-[700px] m-auto text-gray-300">
            This is a self-initiated project that began as a little joke. I said
            to a friend that Sweden is so cold that fruits should have double
            skin. Then I thought, “Why not to visualize that?”
            This is a self-initiated project that began as a little joke. I said
            to a friend that Sweden is so cold that fruits should have double
            skin. Then I thought, “Why not to visualize that?”
          </p>
        </div>
        <div className="images grid grid-cols-1">
          {images.length > 0
            ? images.map((img, index) => {
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
  );
};

export default PortfolioDetails;
