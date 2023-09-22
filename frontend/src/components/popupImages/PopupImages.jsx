import React from "react";
import imgProject1 from "../../assets/images/project-1.jpeg";
import imgProject2 from "../../assets/images/project-2.jpeg";
import imgProject3 from "../../assets/images/project-3.jpeg";
import imgProject4 from "../../assets/images/project-4.jpeg";
import imgProject5 from "../../assets/images/project-5.jpeg";
import imgProject6 from "../../assets/images/project-6.jpeg";
import "./popupImages.scss";

const PopupImages = ({ index, setOpenPoup, setIndex }) => {
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

  const handleClickSlide = (type) => {
    if (type === "prev" && index > 0) {
        setIndex(index - 1)
    }else if (type === "next" && index < images.length - 1) {
        setIndex(index + 1)
    }
  }

  return (
    <div className="popup_images">
      <div className="close_popup" onClick={() => setOpenPoup(false)}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="content">
        <div className="image">
          <img src={images[index]} alt="img" loading="lazy" />
        </div>
      </div>
      <div className="btns_slide">
        <button className="btn_prev" onClick={() => handleClickSlide("prev")}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button className="btn_next" onClick={() => handleClickSlide("next")}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default PopupImages;
