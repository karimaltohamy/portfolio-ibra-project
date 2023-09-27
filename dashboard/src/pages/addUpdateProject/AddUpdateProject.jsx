import React, { useState } from "react";
import { projectInputs } from "../../formSource";

const AddUpdateProject = () => {
  const [mainImg, setMainImg] = useState("");
  const [images, setImages] = useState();
  const [inputs, setInputs] = useState({
    title: "",
    type: "",
    description: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (location.pathname.split("/")[2] === "add") {
      console.log("handle Add project");
      console.log({ ...inputs, mainImg, images });
    } else if (location.pathname.split("/")[2] === "update") {
      console.log("handle update project");
      console.log({ ...inputs, mainImg, images });
    }
  };

  return (
    <div className="project_action_page section_dash">
      <div className="main_form">
        <form action="" onSubmit={handleSubmit}>
          <div className="image">
            <img
              src={
                mainImg
                  ? URL.createObjectURL(mainImg)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="inputs">
            <div className="flex items-center justify-between w-full">
              <div className="input_file">
                <label htmlFor="mainImg">
                  Main Image:{" "}
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
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </label>
                <input
                  type="file"
                  id="mainImg"
                  onChange={(e) => setMainImg(e.target.files[0])}
                />
              </div>
              <div className="input_file">
              <label htmlFor="images">
                images:{" "}
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
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </label>
              <input
                type="file"
                id="images"
                multiple
                onChange={(e) => setImages(e.target.files)}
              />
            </div>
            </div>

            {projectInputs
              ? projectInputs.map((input, index) => {
                  return (
                    <div className="input_item" key={index}>
                      <label htmlFor="username">{input.label}</label>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        id={input.idInput}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  );
                })
              : ""}
          </div>
          <button type="submit" className="btn_submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUpdateProject;
