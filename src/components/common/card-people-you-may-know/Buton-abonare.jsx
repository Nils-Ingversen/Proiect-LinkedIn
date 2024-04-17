import "./Buton-abonare.css";
import { useState } from "react";

export default function ButonAbonare({ subscribers }) {
  let [abonati = subscribers, setAbonati] = useState(subscribers);
  const [subscribed, setSubscribed] = useState(false);

  const handleButtonClick = () => {
    if (subscribed) {
      setSubscribed(false);
      setAbonati(abonati - 1);
    } else {
      setSubscribed(true);
      setAbonati(abonati + 1);
    }
  };

  return (
    <div>
      <p className="subscribers">{abonati} subscribers</p>
      <button
        className="buton-newslatters-subscribe"
        onClick={handleButtonClick}
      >
        {subscribed ? "Subscribed" : "Subscribe"}
      </button>
    </div>
  );
}
