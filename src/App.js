import { useState } from "react";
import "./styles.css";
import bg from "../background.jpg";
import happyImg from "../src/happy.png";
import unhappyImg from "../src/unhappy.png";
import githubLogo from "../src/github.svg";
import linkedinLogo from "../src/linkedin.svg";
import twitterLogo from "../src/twitter.svg";
import portfolioLogo from "../src/portfolio.svg";

export default function App() {
  const [alertInfo, setAlertInfo] = useState("block");
  const [yesLuckyDiv, setYesLuckyDiv] = useState("none");
  const [noLuckyDiv, setNoLuckyDiv] = useState("none");
  let dateInput, luckyNumber;
  // const []

  const checkLucky = (e) => {
    e.preventDefault();
    let date = dateInput;
    date = Number(date.split("-").join(""));
    let lucky = Number(luckyNumber);
    // console.log(date, lucky);
    let sum = 0;
    while (date !== 0) {
      sum = sum + (date % 10);
      date = Math.floor(date / 10);
    }
    console.log(sum, lucky);
    if (sum % lucky === 0) {
      setYesLuckyDiv("block");
      setNoLuckyDiv("none");
    } else {
      setYesLuckyDiv("none");
      setNoLuckyDiv("block");
    }
  };

  return (
    <div
      style={{
        minHeight: "270vh",
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
                type="date"
                id="date"
                name="date"
                onChange={(e) => {
                  dateInput = e.target.value;
                }}
                required="required"
              />
            </p>
            <p>
              <label htmlFor="number">
                <h2>Lucky Number</h2>
              </label>
            </p>
            <p>
              <input
                type="number"
                id="number"
                name="number"
                onChange={(e) => {
                  luckyNumber = e.target.value;
                }}
                required="required"
              />
            </p>
            <p>
              <button type="submit" className="btn" onClick={checkLucky}>
                Check
              </button>
            </p>
          </form>
          <div style={{ display: `${yesLuckyDiv}` }} className="yesLucky">
            <h2>Yeeyeyeiii, your birthday is lucky for you!</h2>
            <img src={happyImg} alt="happy" className="resultImg" />
          </div>
          <div style={{ display: `${noLuckyDiv}` }} className="noLucky">
            <h2>Oops, your birthday is not lucky for you!</h2>
            <img src={unhappyImg} alt="unhappy" className="resultImg" />
          </div>
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
