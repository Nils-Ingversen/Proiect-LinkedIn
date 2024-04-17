import "./Cardme.css";

export default function Cardme() {
  return (
    <div className="card-left-me">
      <div className="card-left-superior">
        <img className="imagine-cardme" src="./poza-neagra.jpg"></img>
        <div className="box-poza-eu-cardme">
          <img className="poza-eu-cardme" src="./poza-eu.jpeg"></img>
        </div>
        <h2 className="nume-cardme">Ingversen Nils Eduard</h2>
        <p className="descriere-cardme">
          "Driven individual with a budding passion for web development,
          proficient in HTML, CSS, and JavaScript at a beginner level. Eager to
          expand skills and contribute to innovative projects within the tech
          industry."
        </p>
        <hr className="linie-cardme"></hr>
        <button className="button-cardme">
          <p className="connection">Connection</p>
          <p className="grow-your">Grow your network</p>
        </button>
        <hr className="linie-cardme"></hr>
        <button className="button-cardme">
          <p className="strengthen">
            Strengthen your profile with an AI writing assistant
          </p>
          <a href="" className="try-premium">
            Try premium for RON0
          </a>
        </button>
        <hr className="linie-cardme"></hr>
        <button className="button-cardme">
          <p className="my-items">My items</p>
        </button>
      </div>
      <div className="card-left-jos">
        <a href="" className="groups">
          Groups
        </a>
        <a href="" className="groups">
          Events
        </a>
        <a href="" className="groups">
          Followed Hashtags
        </a>
        <hr className="linie-card"></hr>
        <button className="discover-more">Discover more</button>
      </div>
    </div>
  );
}
