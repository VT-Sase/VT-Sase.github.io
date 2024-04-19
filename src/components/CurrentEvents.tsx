import "../styles/CurrentEvents.css";

const CurrentEvents: React.FC = () => {
  return (
    <>
      <nav className="navbar-main">
        <p style={{ margin: 0 }} id="hamburger">
          &#9776;
        </p>
        <a href="/" className="navbar-link left-link">
          Home
        </a>
        <a href="/about" className="navbar-link left-link">
          About
        </a>
        <div className="dropdown">
          <div className="navbar-link left-link">Events</div>
          <div className="dropdown-content">
            <a href="/events" className="navbar-link left-link">
              Current Events
            </a>
            <a href="/year-in-review" className="navbar-link left-link">
              Year in Review
            </a>
          </div>
        </div>
        <div className="dropdown">
          <div className="navbar-link left-link">Officers</div>
          <div className="dropdown-content">
            <a href="/officers/" className="navbar-link left-link">
              Current Officers
            </a>
            <a href="/officers/oldOfficers2021-22.html" className="navbar-link left-link">
              2021-2022
            </a>
            <a href="/officers/oldOfficers2019-20.html" className="navbar-link left-link">
              2019-2020
            </a>
            <a href="/officers/oldOfficers2018-19.html" className="navbar-link left-link">
              2018-2019
            </a>
          </div>
        </div>
        <a href="/sponsors" className="navbar-link left-link">
          Sponsors
        </a>
        <a href="/alumni" className="navbar-link left-link">
          Alumni
        </a>

        <div></div>
        <ul className="navbar-connect">
          <li className="navbar-text">Connect:</li>
          <li>
            <a
              href="https://www.facebook.com/saseatvt/"
              className="navbar-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/saseatvt/"
              className="navbar-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="mailto:vtsase@gmail.com" className="navbar-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </nav>

      {/* <!-- Hidden Navbar --> */}
      <nav className="navbar-hidden">
        <div className="navbar-select-option">
          <a href="/" className="navbar-link">
            Home
          </a>
        </div>
        <div className="navbar-select-option">
          <a href="/about" className="navbar-link">
            About
          </a>
        </div>
        <div className="navbar-select-option">
          <a href="/events" className="navbar-link">
            Events
          </a>
        </div>
        <div className="navbar-select-option">
          <a href="/officers" className="navbar-link">
            Officers
          </a>
        </div>
        <div className="navbar-select-option">
          <a href="/sponsors" className="navbar-link">
            Sponsors
          </a>
        </div>
        <div className="navbar-select-option">
          <a href="/year-in-review" className="navbar-link">
            Year in Review
          </a>
        </div>
        <div className="navbar-select-option">
          <a href="/alumni" className="navbar-link">
            Alumni
          </a>
        </div>
      </nav>

      <section
        className="header"
        style={{
          background: "url('/assets/img/about-compressed-smaller/event_header.jpg') no-repeat left 40%",
          backgroundSize: "cover"
        }}
      >
        <h1>Events</h1>
      </section>

      <section className="content">
        <div className="bio">
          <p>
            For our internal events, we have General Body Meetings (GBM's) approximately once a month for announcements,
            fun activities, socializing, and most importantly, <em>free food</em>! Some other notable events include
            Gobblerfest at the beginning of the year, Mentor-Mentee Week in the Fall Semester, and our lovely SASE Gala
            hosted in the Spring Semester!
          </p>

          <p>
            On our external events, we host professional gatherings such as workshops and information sessions
            throughout the year, most often during career fair season (at the beginning of the fall and spring
            semesters). They are often great opportunities for networking, learning about different companies, and
            experience talking with recruiters.
          </p>

          <p>
            <strong>Here are our upcoming events:</strong>
          </p>

          <div className="google-calendar">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=pjk3m454iflrc6s84psfvrsomk%40group.calendar.google.com&ctz=America%2FNew_York"
              style={{ border: "solid 1px #777", width: 800, height: 600 }}
            ></iframe>
          </div>

          <p>
            If you want a hassle-free way of keeping up with our events, add VT SASE's Calendar to your Google Calendar!
            It's simple!
          </p>
          <ul style={{ paddingRight: 0 }}>
            <li>Go on your preferred Google Calendar</li>
            <li>Click the '+' sign next to 'Other Calendars' on the left side of the page</li>
            <li>Click 'From URL' from the drop-down menu</li>
            <li>Paste the following link into the 'URL of Calendar' Bar</li>
            <ul style={{ paddingRight: 0 }}>
              <li style={{ wordWrap: "break-word" }}>
                <a
                  style={{ color: "rgb(47, 165, 204)", textDecoration: "underline" }}
                  href="https://calendar.google.com/calendar/ical/pjk3m454iflrc6s84psfvrsomk%40group.calendar.google.com/public/basic.ics"
                  target="_blank"
                >
                  <b>
                    https://calendar.google.com/calendar/ical/pjk3m454iflrc6s84psfvrsomk%40group.calendar.google.com/public/basic.ics
                  </b>
                </a>
              </li>
            </ul>
            <li>
              You now can see all the events our lovely JCretary (Julia Chen) makes to our informative SASE Google
              Calendar! (: 😎❤️
            </li>
            <ul style={{ paddingRight: 0 }}>
              <li>No worries, you can always unsubscribe from the calendar if needed!</li>
            </ul>
          </ul>
          <p>
            For more information about current and upcoming SASE events, please refer to our{" "}
            <a
              href="https://linktr.ee/saseatvt"
              target="_blank"
              style={{ color: "rgb(47, 165, 204)", textDecoration: "underline" }}
            >
              <b>LinkTree</b>
            </a>
            !
          </p>

          <div>
            ---------------------------------------------------------------------------------------------------------------------------------
          </div>

          <p>Below, you will see our extraordinary gallery of historical SASE photos from past years:</p>
          <ul>
            <li>
              <b>
                To view the entire album for a particular event, please click on its Event Card <u>CAPTION</u> below!
              </b>
            </li>
            <li>
              To see all of these photos and <i>MORE</i>, please refer to our{" "}
              <a
                href="https://www.facebook.com/saseatvt/"
                target="_blank"
                style={{ color: "rgb(47, 165, 204)", textDecoration: "underline" }}
              >
                <b>Facebook Page</b>
              </a>
              !
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CurrentEvents;
