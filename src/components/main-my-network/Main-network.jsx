import ManageMyNetwork from "../common/card-manage-my-network/Manage-my-network";

import FeedNewslatters from "../common/card-people-you-may-know/Feed-Newslatters";
import "./Main-network.css";

export default function MainNetwork() {
  return (
    <div className="main-network">
      <ManageMyNetwork />
      <FeedNewslatters />
    </div>
  );
}
