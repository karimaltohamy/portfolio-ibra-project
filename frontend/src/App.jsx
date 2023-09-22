import { Fragment } from "react";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Routers from "./routes/Routers";

function App() {
  return (
    <Fragment>
      <Header />
        <Routers />
      <Footer />
    </Fragment>
  );
}

export default App;
