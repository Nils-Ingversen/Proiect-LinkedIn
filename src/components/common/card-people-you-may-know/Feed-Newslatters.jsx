import "./Feed-Newslatters.css";
import { Newslatters } from "../../../data/Newslatters";
import PeopleNewslatters from "./People-Newslatters";
import CardPeople from "./Card-people";

export default function FeedNewslatters() {
  return (
    <div className="box-people">
      <PeopleNewslatters />
      <h3 className="titlu-newslatters">Popular newsetters across LinkedIn</h3>
      <div className="container-newsletters">
        {Newslatters.map((newslatter) => (
          <CardPeople
            key={newslatter.id}
            imagineNewslatter={newslatter.imagineNewslatter}
            numeNewslatter={newslatter.numeNewslatter}
            imagineOmNewslatter={newslatter.imagineOmNewslatter}
            numeOmNewslatter={newslatter.numeOmNewslatter}
            descriereNewslatter={newslatter.descriereNewslatter}
            subscribers={newslatter.subscribers}
          />
        ))}
      </div>
    </div>
  );
}
