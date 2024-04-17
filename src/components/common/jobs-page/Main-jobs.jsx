import "./Main-jobs.css";

export default function MainJobs() {
  return (
    <div className="main-jobs">
      <div className="main-jobs-stanga">
        <div className="card-stanga-main-jobs">
          <h4 className="titlu-card-stanga-main-jobs">My jobs</h4>
          <h4 className="titlu-card-stanga-main-jobs">Preferences</h4>
          <h4 className="titlu-card-stanga-main-jobs">Interview prep</h4>
          <h4 className="titlu-card-stanga-main-jobs">Job seeker guidance</h4>
        </div>
        <button className="buton-stanga-main-jobs">Post a free job</button>
      </div>
      <div className="main-jobs-mijloc">
        <div className="top-job-pick-for-you">
          <h3 className="titlu-top-job">Top job picks for you</h3>
          <p className="descriere-top-job">
            Based on your profile and search history
          </p>

          <div className="box-job">
            <img
              className="imagine-job"
              src="https://media.licdn.com/dms/image/D4D0BAQEyuAesmFwWPA/company-logo_100_100/0/1704999546975/exadel_logo?e=1721260800&v=beta&t=VqQ3OmUsIsoBwnSpSwY3Nc8YD8yFVN_fOvTfMHyMCms"
            ></img>
            <div className="boxulet-titlu-descriere-job">
              <h3 className="nume-job">Java Technical Lead</h3>
              <p className="descriere-job">Exadel</p>
              <p className="locatie-job">Romania Remote</p>
            </div>
          </div>
          <div className="box-job">
            <img
              className="imagine-job"
              src="https://media.licdn.com/dms/image/D4D0BAQErgPH_n3WTsg/company-logo_100_100/0/1698825417320/nttdataro_logo?e=1721260800&v=beta&t=z4V1lqDG0NYJqXQbhYHRIHIrDwPcVu9V_HVKoi0h_W0"
            ></img>
            <div className="boxulet-titlu-descriere-job">
              <h3 className="nume-job">SAP SD Consultant Job</h3>
              <p className="descriere-job">NTT DATA Romania</p>
              <p className="locatie-job">Sibiu, Romania Remote</p>
            </div>
          </div>
          <div className="box-job">
            <img
              className="imagine-job"
              src="https://media.licdn.com/dms/image/D4E0BAQHYr4M_PHhGdg/company-logo_100_100/0/1688363990393/siemens_logo?e=1721260800&v=beta&t=furK5nrp3HIzIbfwxdNaLEDs46p_qu-WQ9m1ixlcSOo"
            ></img>
            <div className="boxulet-titlu-descriere-job">
              <h3 className="nume-job">Senior .Net Developer</h3>
              <p className="descriere-job">Exadel</p>
              <p className="locatie-job">Romania Remote</p>
            </div>
          </div>
        </div>
        <div className="suggested-job">
          <h3 className="titlu-suggested">Suggested job searches</h3>
          <div className="boxulet-suggested">
            <button className="buton-suggested">Assistant</button>
            <button className="buton-suggested">Office Assitant</button>
            <button className="buton-suggested">Assistant Coordinator</button>
            <button className="buton-suggested">Clerical Assistant</button>
            <button className="buton-suggested">Departament Specialist</button>
            <button className="buton-suggested">
              Office Administrative Assistant
            </button>
            <button className="buton-suggested">Departament Assistant</button>
          </div>
        </div>
      </div>
      <div className="card-dreapta">
        <h3 className="job-seeker">Job seeker guidance</h3>
        <p className="recommended-based">Recommended based on your activity</p>
        <p className="explore">
          Explore our curated guide of expert-led courses, such as how to
          improve your resume and grow your network, to help you land your next
          opportunity.
        </p>
      </div>
    </div>
  );
}
