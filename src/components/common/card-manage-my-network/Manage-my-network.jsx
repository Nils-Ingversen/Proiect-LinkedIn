import "./Manage-my-network.css";

export default function ManageMyNetwork() {
  return (
    <div className="box-manage-my-network">
      <h3 className="titlu-manage-my-network">Manage my network</h3>
      <button className="button-manage-my-network">Connection</button>
      <button className="button-manage-my-network">
        Following & followers
      </button>
      <button className="button-manage-my-network">Groups</button>
      <button className="button-manage-my-network">Events</button>
      <button className="button-manage-my-network">Pages</button>
      <button className="button-manage-my-network">Newsletters</button>
      <div className="box-linie-network">
        <hr className="linie-newtork"></hr>
      </div>
      <div className="box-link-network">
        <a href="" className="link-network">
          About
        </a>
        <a href="" className="link-network">
          Accessibility
        </a>
        <a href="" className="link-network">
          Help Center
        </a>
        <a href="" className="link-network">
          Privacy & Terms
        </a>
        <a href="" className="link-network">
          Ad Choises
        </a>
        <a href="" className="link-network">
          {" "}
          Advertising
        </a>
        <a href="" className="link-network">
          More
        </a>
      </div>
    </div>
  );
}
