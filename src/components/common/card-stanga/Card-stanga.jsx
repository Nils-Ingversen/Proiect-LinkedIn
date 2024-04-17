import { useState } from "react";
import "./Card-stanga.css";

export default function CardStanga() {
  const [follow, setFollow] = useState(false);

  function ButtonFollow() {
    if (follow) {
      setFollow(false);
    } else {
      setFollow(true);
    }
  }

  return (
    <div className="card-dreapta-tot">
      <div className="box-card-stanga">
        <h3 className="card-stanga-titlu">Add your feed</h3>
        <div className="box-nume-poza">
          <img
            className="imagine-follow"
            src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png"
          ></img>
          <div className="box-nume-follow">
            <h3 className="nume-follow">Amazon</h3>
            <p className="ocupatie-follow">Company</p>
          </div>
        </div>
        <button className="button-follow" onClick={ButtonFollow}>
          {follow ? "Followed" : "Follow +"}
        </button>
        <div className="box-nume-poza">
          <img
            className="imagine-follow"
            src="https://ed.stanford.edu/sites/default/files/news_images/willy-web.jpg"
          ></img>
          <div className="box-nume-follow">
            <h3 className="nume-follow">Andrew Huberman</h3>
            <p className="ocupatie-follow">
              Profesor and Neuroscientist at Stanford University
            </p>
          </div>
        </div>
        <button className="button-follow">Follow +</button>
        <div className="box-nume-poza">
          <img
            className="imagine-follow"
            src="https://www.medlife.ro/sites/default/files/inline-images/diferentele_1.jpg"
          ></img>
          <div className="box-nume-follow">
            <h3 className="nume-follow">Niculina G</h3>
            <p className="ocupatie-follow">
              Psiholog Principal la Cabinet individual de psihologie
            </p>
          </div>
        </div>
        <button className="button-follow">Follow +</button>
      </div>
      <div className="copy-right">
        <img
          src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
          className="imagine-copy-right"
        ></img>
        <h4 className="titlu-copy-right">LinkedIn Corporation © 2024</h4>
      </div>
    </div>
  );
}
