import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./styles/style.css";
import SplitText from "./components/SplitText";
import SplashCursor from "./components/SplashCursor";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SplashCursor /> {/* Agrega el componente aquí */}
      {/* SEO Mejorado */}
      <Helmet>
        <title>Sandra Furman - Counsellor & Life Coach</title>
        <meta
          name="description"
          content="Professional life coaching and counseling services to help you reach your full potential."
        />
        <meta
          name="keywords"
          content="Life Coach, Counseling, Mental Health, Coaching, Personal Growth"
        />
        <meta
          property="og:title"
          content="Sandra Furman - Counsellor & Life Coach"
        />
        <meta
          property="og:description"
          content="Guiding you towards success and happiness through professional coaching."
        />
        <meta property="og:image" content="./images/logo.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
      </Helmet>
      {/* Header */}
      <header className="header">
        <div className="header__container">
          <div className="logo">
            <img
              src="./images/logo.png"
              alt="Sandra Furman Coaching"
              className="logoImg"
            />
          </div>

          {/* Menú de navegación */}
          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <a href="#about">About me</a>
              </li>
              <li>
                <a href="#philosophy">My Philosophy</a>
              </li>
              <li>
                <a href="#approaches">Approaches</a>
              </li>
              <li>
                <a href="#expect">What to Expect</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#calendar">Appointment</a>
              </li>{" "}
              {/* Espacio reservado */}
            </ul>
          </nav>
        </div>
      </header>
      {/* Main Content */}
      <main>
        <section id="unlock" className="section slogan">
          <SplitText
            text="Unlock Your Potential, Live Your Best Life."
            className="text-4xl font-bold text-center"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <p className="subtitle">Counselling and life coaching</p>
        </section>

        <section id="about" className="section">
          <img
            src="../public/images/Sandra.jpg"
            alt="Sandra Furman"
            className="section-img"
          />
          <div className="section-content">
            <h2>About</h2>
            <p>
              Hello! I’m Sandra Furman, a dedicated counsellor and life coach
              with a passion for empowering individuals to unlock their full
              potential and live their most fulfilling lives.
            </p>
          </div>
        </section>

        <section id="philosophy" className="section">
          <img
            src="./images/colaborativa.png"
            alt="Philosophy"
            className="section-img"
          />
          <div className="section-content">
            <h2>My Philosophy</h2>
            <p>
              I believe that every individual possesses the inherent strength
              and resilience to overcome challenges and achieve their goals.
            </p>
          </div>
        </section>

        <section id="approaches" className="section">
          {/* <img
            src="../public/images/approaches.png"
            alt="Approaches"
            className="section-img"
          /> */}
          <div className="section-content">
            <h2>Approaches and Techniques</h2>
            <div className="approach-list">
              <div className="approach">
                <img
                  src="./images/cbt-background.png"
                  alt="CBT"
                  className="approach-img"
                />
                <p>
                  <strong>Cognitive Behavioral Therapy (CBT)</strong> -
                  Transforming negative thought patterns and behaviors.
                </p>
              </div>
              <div className="approach">
                <img
                  src="./images/pct-background.png"
                  alt="PCT"
                  className="approach-img"
                />
                <p>
                  <strong>Person-Centered Therapy</strong> - Emphasizing
                  empathy, acceptance, and active listening.
                </p>
              </div>
              <div className="approach">
                <img
                  src="./images/sfbt-background.png"
                  alt="SFBT"
                  className="approach-img"
                />
                <p>
                  <strong>Solution-Focused Brief Therapy (SFBT)</strong> -
                  Identifying and leveraging strengths to find solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="expect" className="section">
          <img
            src="./images/Whatexpect.png"
            alt="What to Expect"
            className="section-img"
          />
          <div className="section-content">
            <h2>What to Expect</h2>
            <p>
              When we work together, you can expect a collaborative and dynamic
              process where your goals and needs take center stage.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact Us</h2>
          <p>Email: contact@sandrafurman.com</p>
        </section>
      </main>
      {/* Footer */}
      <footer>
        <p>© 2025 Sandra Furman Coaching. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
