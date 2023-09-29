import { useEffect, useState } from "react";
import "../../sass/comp/mainForm.scss";
import { userInputs } from "../../formSource";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import upload from "../../utils/upload";
import { toast } from "react-toastify";
import apiRequest from "../../utils/apiRequest";
import Loader from "../../components/loader/Loader";

const AddUser = () => {
  const { id } = useParams();
  const location = useLocation();
  const [file, setFile] = useState("");
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  // add or update user
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      let url;
      if (typeof file !== "string") {
        url = await upload(file);
      }
      
      if (location.pathname.split("/")[2] === "add") {
        await apiRequest.post("auth/create-user", { ...inputs, avatar: url });
        toast.success("create user successfull");
        navigate("/users");
      } else if (location.pathname.split("/")[2] === "update") {
        await apiRequest.put(`users/update-user/${id}`, {
          ...inputs,
          avatar: url,
        });
        toast.success("update user successfull");
        navigate("/users");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // get user
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await apiRequest.get(`/users/get-user/${id}`);
        setInputs({
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          email: data.user.email,
          phoneNumber: data.user.phoneNumber,
        });
        setFile(data.user.avatar);
      } catch (error) {
        console.log(error);
      }
    };
    id ? getUser() : null;
  }, []);

  return (
    <div className="user_action_page section_dash relative" style={{minHeight: "calc(100vh - 56px)"}}>
      {loading ? (
        <Loader />
      ) : (
        <div className="main_form">
          <form action="" onSubmit={handleSubmit}>
            <div className="image">
              <img
                src={
                  file
                    ? typeof file === "string" && file.includes("cloudinary")
                      ? file
                      : URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <div className="inputs">
              <div className="input_file">
                <label htmlFor="imgUser">
                  Image:{" "}
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
                  id="imgUser"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {userInputs
                ? userInputs.map((input, index) => {
                  if (input.idInput === "password" && id) {
                    return;
                  }
                    return (
                      <div className="input_item" key={index}>
                        <label htmlFor="username">{input.label}</label>
                        <input
                          type={input.type}
                          placeholder={input.placeholder}
                          id={input.idInput}
                          name={input.idInput}
                          onChange={(e) => handleChange(e)}
                          value={inputs[input.idInput]}
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
      )}
    </div>
  );
};

export default AddUser;
