import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Options from "../../components/options/options";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
       <div className="wrapper_inner">
          <Options/>
       </div>
      </div>
    </div>
  );
};

export default Home;
