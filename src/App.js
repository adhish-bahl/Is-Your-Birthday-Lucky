import "./styles.css";
import githubLogo from "../src/github.svg";
import linkedinLogo from "../src/linkedin.svg";
import twitterLogo from "../src/twitter.svg";
import portfolioLogo from "../src/portfolio.svg";
import bg from "../background.jpg";
import { useState } from "react";

export default function App() {
  const [alertInfo, setAlertInfo] = useState("block");
  // const []

  const checkLucky = () => {
    const date = dateInput;
  };

  return (
    <div
      style={{
        minHeight: "200vh",
        backgroundAttachment: "fixed",
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
      className="App"
    >
      <div className="container">
        <section className="nitro">
          <h1>Is Your Birthday Lucky?</h1>
          <a href="#mainSection">Click to scroll down to check!</a>
        </section>
        <section id="mainSection">
          <p className="privacyNotice" style={{ display: `${alertInfo}` }}>
            <h3>Privacy Notice!</h3>
            We are not storing your data.
            <span
              role="img"
              aria-labelledby="crossIcon"
              className="crossIcon"
              onClick={() => setAlertInfo("none")}
            >
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
              <input
                required
                type="date"
                id="date"
                name="date"
                onChange={(e) => {
                  dateInput = e.target.value;
                }}
              />
            </p>
            <p>
              <label htmlFor="number">
                <h2>Lucky Number</h2>
              </label>
            </p>
            <p>
              <input
                required
                type="number"
                id="number"
                name="number"
                onChange={(e) => (luckyNumber = e.target.value)}
              />
            </p>
            <p>
              <button type="button" className="btn" onClick={checkLucky}>
                Check
              </button>
            </p>
          </form>
          <footer>
            <ul>
              <li className="footerLink">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/adhish-bahl"
                >
                  <img src={githubLogo} alt="github" />
                </a>
              </li>
              <li className="footerLink">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/adhish_bahl"
                >
                  <img src={twitterLogo} alt="twitter"></img>
                </a>
              </li>
              <li className="footerLink">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/adhish-bahl-4113591b7/"
                >
                  <img src={linkedinLogo} alt="linkedin"></img>
                </a>
              </li>
              <li className="footerLink">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://adhish-bahl.netlify.app/"
                >
                  <img src={portfolioLogo} alt="portfolio"></img>
                </a>
              </li>
            </ul>

            <div className="legacyText">
              ©2021 | Adhish Bahl |{" "}
              <a
                href="#alertBox"
                onClick={() => {
                  setAlertInfo("block");
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
