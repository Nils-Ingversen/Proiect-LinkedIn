import { useState } from "react";
import "./Card-people.css";
import ButonAbonare from "./Buton-abonare";

export default function CardPeople({
  imagineNewslatter,
  numeNewslatter,
  imagineOmNewslatter,
  numeOmNewslatter,
  descriereNewslatter,
  subscribers,
}) {
  // const [abonare, setAbonare] = useState(subscribers);
  // const [apasat, setApasat] = useState(false);

  // function abonareOm() {
  //   if (abonare) {
  //     setAbonare(abonare + 1);
  //   }
  // }

  return (
    <div>
      <div className="card-newslatters">
        <img className="imagine-newslatters" src={imagineNewslatter}></img>
        <h3 className="nume-newslatter">{numeNewslatter}</h3>
        <div className="nume-plus-imagine-newslatters">
          <img
            className="imagine-om-newslatters"
            src={imagineOmNewslatter}
          ></img>
          <h3 className="nume-om-newslatters">{numeOmNewslatter}</h3>
        </div>
        <p className="descriere-newslatters">{descriereNewslatter}</p>
        <ButonAbonare subscribers={subscribers} />
      </div>
    </div>
  );
}
