import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>

        <p className="para">
          Hello! I'm Nisha, a B.Tech Information Technology student at ABES Engineering College, Ghaziabad.
          I am passionate about building intelligent software solutions using modern technologies.
        </p>

        <p className="para">
          My primary interests lie in Artificial Intelligence, Web Development, and problem solving.
          I enjoy developing applications that combine powerful backend systems with intuitive user interfaces.
        </p>

        <p className="para">
          I have experience working with technologies such as Python, Java, JavaScript, React, FastAPI,
          and modern AI APIs like Google Gemini and Groq. I enjoy learning new tools and continuously
          improving my development and problem-solving skills.
        </p>

        <p className="para">
          I have also participated in competitive hackathons and coding competitions,
          including being a Finalist in the RIFT'26 Hackathon organized by Physics Wallah IOI.
        </p>
      </div>
    </div>
  );
};

export default About;