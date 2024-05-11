import SideBar from "./Components/SideBar";
import Content from "./Components/Content";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="dashboard flex">
        <SideBar />
        <Content />
      </div>
    </>
  );
};

export default App;
