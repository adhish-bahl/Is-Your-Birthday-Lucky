import "./styles.css";
import githubLogo from "../src/github.svg";
import linkedinLogo from "../src/linkedin.svg";
import twitterLogo from "../src/twitter.svg";
import portfolioLogo from "../src/portfolio.svg";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <section className="nitro">
          <h1>Is Your Birthday Lucky?</h1>
          <a href="#mainSection">Click to scroll down to check!</a>
        </section>
        <section id="mainSection">
          <p className="privacyNotice">
            <h3>Privacy Notice!</h3>
            We are not storing your data.
            <span role="img" aria-labelledby="crossIcon" className="crossIcon">
              &#10060;
            </span>
          </p>
          <h1>Enter Your Birthdate and Lucky Number below to continue</h1>
          <form>
            <p>
              <label htmlFor="date">
                <h2>Birth Date</h2>
              </label>
            </p>
            <p>
              <input required type="date" id="date" name="date" />
            </p>
            <p>
              <label htmlFor="number">
                <h2>Lucky Number</h2>
              </label>
            </p>
            <p>
              <input required type="number" id="number" name="number" />
            </p>
            <p>
              <button type="button" className="btn">
                Check
              </button>
            </p>
          </form>
          <footer>
            <ul>
              <li className="footerLink">
                <a href="https://github.com/adhish-bahl">
                  <img src={githubLogo} alt="github" />
                </a>
              </li>
              <li className="footerLink">
                <a href="https://twitter.com/adhish_bahl">
                  <img src={twitterLogo} alt="twitter"></img>
                </a>
              </li>
              <li className="footerLink">
                <a href="https://www.linkedin.com/in/adhish-bahl-4113591b7/">
                  <img src={linkedinLogo} alt="linkedin"></img>
                </a>
              </li>
              <li className="footerLink">
                <a href="http://adhish-bahl.netlify.app/">
                  <img src={portfolioLogo} alt="portfolio"></img>
                </a>
              </li>
            </ul>

            <div className="legacyText">
              ©2021 | Adhish Bahl |{" "}
              <a
                href="#alertBox"
                onClick={() => {
                  setDisplayAlert("flex");
                }}
                style={{ cursor: "pointer", color: "Black" }}
              >
                Privacy Policy
              </a>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}
