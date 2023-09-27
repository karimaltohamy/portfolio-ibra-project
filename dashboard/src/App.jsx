import "./App.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Routers from "./routes/Routers";

function App() {
  return (
    <main>
      <Sidebar />
      <div className="content_page">
        <Header />
        <Routers />
      </div>
    </main>
  );
}

export default App;
