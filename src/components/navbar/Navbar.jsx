import Buttons from "../common/buttons-navbar/Buttons-navbar";
import Logo from "../common/logo/Logo";
import Searchbar from "../common/searchbar/Searchbar";
import "./Navbar.css";
import Home from "../../assets/acasa.png";
import MyNetwork from "../../assets/oameni.png";
import Jobs from "../../assets/servieta.png";
import Messaging from "../../assets/mesaje.png";
import Notification from "../../assets/notificari.png";
import Buttonme from "../common/button-me/Button-me";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <Searchbar />
      <Link to="/home">
        <Buttons icon={Home} text="Home" />
      </Link>
      <Link to="/my-network">
        <Buttons icon={MyNetwork} text="My Network"></Buttons>
      </Link>
      <Link to="/jobs">
        <Buttons icon={Jobs} text="Jobs" />
      </Link>
      <Buttons icon={Messaging} text="Messaging" />
      <Buttons icon={Notification} text="Notification" />
      <Buttonme />
    </div>
  );
}
