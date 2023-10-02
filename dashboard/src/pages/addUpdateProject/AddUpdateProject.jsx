import React, { useContext, useEffect, useState } from "react";
import { projectInputs } from "../../formSource";
import upload from "../../utils/upload";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import { useNavigate, useParams } from "react-router-dom";
import apiRequest from "../../utils/apiRequest";

const AddUpdateProject = () => {
  const { id } = useParams();
  const [mainImg, setMainImg] = useState("");
  const [images, setImages] = useState(null);
  const [videos, setVideos] = useState([]);
  const [inputs, setInputs] = useState({
    title: "",
    type: "",
    description: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // handle change inputs
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  // handle add or update project
  const handleSubmit = async (e) => {
    e.preventDefault();
    let cover, urls;

    setLoading(true);

    try {
      if (typeof mainImg !== "string") {
        cover = await upload(mainImg);
      }

      if (images) {
        urls = await Promise.all(
          [...images].map(async (ele) => {
            let url = await upload(ele);
            return url;
          })
        );
      }

      if (location.pathname.split("/")[2] === "add") {
        await apiRequest.post("projects/create-project", {
          ...inputs,
          images: urls,
          mainImg: cover,
          videos
        });
        toast.success("create project successfull");
        navigate("/projects");
      } else if (location.pathname.split("/")[2] === "update") {
        await apiRequest.put(`projects/update-project/${id}`, {
          ...inputs,
          images: urls,
          mainImg: cover,
          videos
        });
        toast.success("update project successfull");
        navigate("/projects");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // handleLinksVideo
  const handleLinksVideo = (e) => {
    let value = e.target.value

    if (e.keyCode == 32 && value !== " ") {
      setVideos([...videos, value]);
      e.target.value = "";
    }
  };

  const handleRemoveLinkVideo = (num) => {
    const newArr = videos.filter((_,index) => index !== num)
    setVideos(newArr)
  }
  // get project
  useEffect(() => {
    const getProject = async () => {
      try {
        const { data } = await apiRequest.get(`/projects/get-project/${id}`);
        setInputs({
          title: data.project.title,
          type: data.project.type,
          description: data.project.description,
        });
        setMainImg(data.project.mainImg);
      } catch (error) {
        console.log(error);
      }
    };
    id ? getProject() : null;
  }, []);

  return (
    <div
      className="project_action_page section_dash relative"
      style={{ minHeight: "calc(100vh - 56px)" }}
    >
      {loading ? (
        <Loader />
      ) : (
        <div className="main_form">
          <form action="" onSubmit={handleSubmit}>
            <div className="image">
              <img
                src={
                  mainImg
                    ? typeof mainImg === "string" &&
                      mainImg.includes("cloudinary")
                      ? mainImg
                      : URL.createObjectURL(mainImg)
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
                          value={inputs[input.idInput]}
                        />
                      </div>
                    );
                  })
                : ""}
              <div className="input_item">
                <label htmlFor="username">Videos</label>
                <input
                  type="text"
                  id="viados"
                  onKeyUp={(e) => handleLinksVideo(e)}
                />
                <div className="flex items-center gap-3 mt-1 flex-wrap">
                  {videos &&
                    videos.map((ele, index) => {
                      return (
                        <div className="p-1 bg-slate-100 rounded shadow flex items-center gap-2" key={index}>
                          <span className="text-[12px]">{ele}</span>
                          <span className="cursor-pointer" onClick={() => handleRemoveLinkVideo(index)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-[15px]"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <button type="submit" className="btn_submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddUpdateProject;
