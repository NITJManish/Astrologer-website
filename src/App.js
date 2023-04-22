import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const navLinks = [
    { name: "Home", icon: "fa-home" },
    { name: "Call with Astrologer", icon: "fa-call" },
    { name: "Live(coming soon)", icon: "fa-live" },
  ];

  const bottomLinks = [
    { name: "24X7 customer support", icon: "fa-headset" },
    { name: "100% refund if unsatisfied", icon: "fa-cog" },
    { name: "private and confidential", icon: "fa-lock" },
    { name: "verified Astrologer", icon: "fa-shield" },
  ];

  return (
    <div className="App">
      {isLoading ? (
        <div className="skeleton-loading">
          <div className="skeleton-navbar"></div>
          <div className="skeleton-content"></div>
        </div>
      ) : (
        <>
          <nav className="navbar">
            <div className="navbar-left">
              <img src="https://media.licdn.com/dms/image/D4D0BAQHeL1mdM9bWig/company-logo_200_200/0/1666011368542?e=2147483647&v=beta&t=I5veaGKBmWb-yQrK1nkpNQilSqsjkQq-6hU7jC0h7MI" alt="logo" />
              <span>Guruji</span>
            </div>
            <div className="navbar-middle">
              {navLinks.map((link) => (
                <div key={link.name} className="navbar-link">
                  <i className={`fas ${link.icon}`}></i>
                  <span>{link.name}</span>
                </div>
              ))}
            </div>
            <div className="navbar-right">
              <img src="https://i.pinimg.com/736x/82/96/64/829664d3eb50101b5c14f46f588429ba.jpg" alt="user" />
            </div>
          </nav>
          <div className="content">
            <button className="consult-now-btn">Consult Now</button>
          </div>
          <footer className="footer">
            {bottomLinks.map((link) => (
              <div key={link.name} className="footer-link">
                <i className={`fas ${link.icon}`}></i>
                <span>{link.name}</span>
              </div>
            ))}
          </footer>
        </>
      )}
    </div>
  );
}

function Fun()
{
  return(
    <>
    <div>
      <h1>tanya singhal</h1>
      <h1>tanya singhal</h1>
      <h1>tanya singhal</h1>
      <h1>tanya singhal</h1>
      <h1>tanya singhal</h1>
    </div>
  </>
  );
}

export default App;