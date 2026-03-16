import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">

          <div className="landing-intro">
            <h2>Hello! I'm Nisha</h2>
            <h1>
              NISHA
            </h1>
          </div>

          <div className="landing-info">
            <h3>B.Tech IT Student</h3>

            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Software</div>
              <div className="landing-h2-2">Developer</div>
            </h2>

            <h2>
              <div className="landing-h2-info">AI & Web</div>
              <div className="landing-h2-info-1">Developer</div>
            </h2>

            {/* Resume Download Button */}
            <div style={{ marginTop: "25px" }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
                data-cursor="disable"
              >
                Download Resume
              </a>
            </div>

          </div>

        </div>

        {children}
      </div>
    </>
  );
};

export default Landing;