import { Link } from "react-router-dom";
import "./Log-in-page.css";

export default function LoginPage() {
  return (
    <div className="container-log-in">
      <div className="box-log-in">
        <div className="box-card-titlu-log-in">
          <h3 className="welcome-back">Welcome Back</h3>
          <div className="card-log-in">
            <h3 className="titlu-card-log-in">Log In</h3>
            <div className="input-nume-log-in">
              <h4 className="titlu-input-log-in">Email Address</h4>
              <input
                type="email"
                className="input-log-in"
                placeholder=""
              ></input>
            </div>
            <div className="input-nume-log-in">
              <h4 className="titlu-input-log-in">Password</h4>
              <input
                type="password"
                className="input-log-in"
                placeholder=""
              ></input>
            </div>
            <Link to="/home">
              <button className="log-in-button">Log In</button>
            </Link>
            <button className="lost-your-password">Lost your password ?</button>
          </div>
        </div>
      </div>
    </div>
  );
}
