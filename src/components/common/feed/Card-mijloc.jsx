import { useState } from "react";
import "./Card-mijloc.css";

export default function Cardmijloc({ name, views, image, description, likes }) {
  let [like, setLike] = useState(likes);
  const [liked, setLiked] = useState(false);

  function likePost() {
    if (liked) {
      setLiked(false);
      setLike(likes);
    } else {
      setLiked(true);
      setLike(likes + 1);
    }
  }

  return (
    <div className="post-card">
      <img className="post-imagine" src={image} />
      <h3 className="post-name">{name}</h3>

      <p className="post-description">{description}</p>
      <div className="post-views-and-likes">
        <p className="post-views">{views}</p>
        <p className="post-likes">
          {like}
          <button className="buton-inima" onClick={likePost}>
            <img className="poza-inima" src="./inima.png"></img>
          </button>
        </p>
      </div>
    </div>
  );
}
