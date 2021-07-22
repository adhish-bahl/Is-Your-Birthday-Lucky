import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <section className="nitro">
          <h1>Is Your Birthday Lucky?</h1>
          <a href="#mainSection">Scroll down to check!</a>
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
              <input type="date" id="date" name="date" />
            </p>
            <p>
              <label htmlFor="number">
                <h2>Lucky Number</h2>
              </label>
            </p>
            <p>
              <input type="number" id="number" name="number" />
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
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li className="footerLink">
                <a href="https://twitter.com/adhish_bahl">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="footerLink">
                <a href="https://www.linkedin.com/in/adhish-bahl-4113591b7/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="footerLink">
                <a href="http://adhish-bahl.netlify.app/">
                  <i className="fas fa-briefcase"></i>
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
