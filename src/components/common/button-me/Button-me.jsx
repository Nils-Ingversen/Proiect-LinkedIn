import React, { useState } from "react";
import "./Button-me.css";
import { Link } from "react-router-dom";

export default function Buttonme() {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="button-me">
      <button
        onClick={() => setShowCard(!showCard)}
        className="buton-card"
        onMouseClick={() => setShowCard(true)}
        // onMouseLeave={() => setShowCard(false)}
      >
        Me
      </button>
      {showCard && (
        <div className="card">
          <h2 className="titlu-card">Ingversen Nils Eduard</h2>
          <p className="paragraf-card">
            "Driven individual with a budding passion for web development,
            proficient in HTML, CSS, and JavaScript at a beginner level. Eager
            to expand skills and contribute to innovative projects within the
            tech industry."
          </p>
          <button className="buton-card-show-profile">Show profile</button>
          <hr className="linie-card"></hr>
          <h3 className="titlu-account">Account</h3>
          <a className="link-card" src="">
            Try Premium for RON0
          </a>
          <a className="link-card" src="">
            Settings & PRivacy
          </a>
          <a className="link-card" src="">
            Help
          </a>
          <a className="link-card" src="">
            Language
          </a>
          <hr className="linie-card"></hr>
          <h4 className="titlu-manage">Manage</h4>
          <a className="link-card" src="">
            Posts & Activity
          </a>
          <a className="link-card" src="">
            Job Posting Acount
          </a>
          <hr className="linie-card"></hr>
          <Link to="/log-in">
            <button className="sign-out-card">Sign out</button>
          </Link>
        </div>
      )}
    </div>
  );
}
