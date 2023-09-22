import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container m-auto">
        <div className="head">
          <h1 className="title">
            Available for <span>Work</span>
          </h1>
        </div>
        <div className="bottom">
          <div className="social_media">
            <div className="item">
              <a href="#">Facebook</a>
            </div>
            <div className="item">
              <a href="#">Twitter</a>
            </div>
            <div className="item">
              <a href="#">Behance</a>
            </div>
            <div className="item">
              <a href="#">Instagram</a>
            </div>
          </div>
          <div className="copy_right">
            <p>{new Date().getFullYear()} © Ibra. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
