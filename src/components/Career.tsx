import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">

        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">

          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – Information Technology</h4>
                <h5>ABES Engineering College, Ghaziabad</h5>
              </div>
              <h3>2023 – Present</h3>
            </div>

            <p>
              Currently pursuing my Bachelor of Technology in Information
              Technology. Focused on software development, artificial
              intelligence, and modern web technologies while building
              real-world projects.
            </p>
          </div>

          {/* Project 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Project – GenRx</h4>
                <h5>AI Powered Pharmacogenomic Clinical Decision System</h5>
              </div>
              <h3>2026</h3>
            </div>

            <p>
              Developed an AI-powered platform that analyzes genomic data and
              generates personalized drug response insights using Python,
              FastAPI, React, TypeScript, Tailwind and AI APIs such as Gemini
              and Groq.
            </p>
          </div>

          {/* Project 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Project – CodeCraft AI</h4>
                <h5>AI Coding Assistant</h5>
              </div>
              <h3>2025</h3>
            </div>

            <p>
              Built an AI coding assistant capable of generating and explaining
              code using OpenAI APIs. Developed an interactive frontend using
              HTML, CSS and JavaScript.
            </p>
          </div>

          {/* Achievement */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Finalist</h4>
                <h5>RIFT’26 – Physics Wallah Institute of Innovation</h5>
              </div>
              <h3>2026</h3>
            </div>

            <p>
              Selected among the top 16 teams across India and ranked top 4 at
              the Noida center among 8000+ registrations for developing an
              AI-based healthcare solution.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;