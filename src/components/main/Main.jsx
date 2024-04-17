import Cardme from "../common/card-left-me/Cardme";
import CardStanga from "../common/card-stanga/Card-stanga";
import Mijloc from "../common/feed/mijloc/Mijloc";

import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <Cardme />
      <Mijloc />
      <CardStanga />
    </div>
  );
}
