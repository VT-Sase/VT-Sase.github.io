import '../App.css';

type Event = {
  img: string;
  link: string;
  title: string;
  description: string;
};

/*
Format: 
img: 
link:
title:
description:
*/

/*
  Review Descriptions & Change FB Links for SaseGala, LunarNewYears, 
*/
const events: Event[] = [
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2024-2025/SaseGala.jpg",
    link: "https://www.facebook.com/media/set/?vanity=saseatvt&set=a.677997954326960",
    title: "SASE's Spring Gala - A banquet filled with delicious food and wonderful performances!",
    description: "Gala hosted this year was off-the-charts! Everyone from" + 
    "freshman, upperclassmen, to alumni showed up! A banquet filled with delicious food, sponsored by Lin" +
    "Yue Chuan, as well as excelling & outstanding performances by many SASE members! All of enjoyed the" +
    "night alongside old friends as well as had the opportunity to meet some new ones too!"
  },
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2024-2025/LunarNewYear.jpg",
    link: "https://www.facebook.com/media/set/?vanity=saseatvt&set=a.637934774999945",
    title: "SASE's Lunar New Year GBM",
    description: "Our members enjoying the new year, welcoming all of its joys and surprises!"
  },
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2024-2025/Thanksgiving.jpg",
    link: "https://www.facebook.com/media/set/?vanity=saseatvt&set=a.695162109277211",
    title: "SASE Thanksgiving GBM",
    description: "A feast surrounded with friends!"
  },
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2024-2025/HalloweenGBM.jpg",
    link: "https://www.facebook.com/media/set/?vanity=saseatvt&set=a.1184160543710696",
    title: "SASE's Halloween GBM",
    description: "BOO! A night for all members to enjoy dress up in" + 
    "costumes, enjoy great tasing candy, and spookiness & surprises! "
  },
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2024-2025/MentorMenteeReveal.jpg",
    link: "https://www.facebook.com/media/set/?vanity=saseatvt&set=a.1184126177047466",
    title: "SASE's Mentor & Mentee Reveal",
    description: "This is it! The moment you have been waiting" + 
    "for...a night to love and happiness as SASE lineages grow! New and previous SASE mentors meet their new" + 
    "mentees!"
  },
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2024-2025/Fashion_Show.jpg",
    link: "https://www.facebook.com/media/set/?vanity=saseatvt&set=a.1184126177047466",
    title: "SASE Fashion Show",
    description: "A showstopping night to remember!"
  },

];

const YearInReview2425: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <section className="header">
        <h2>Year in Review</h2>
      </section>

      <section className="year-in-review-intro">
        <p>A look back on the eventful year SASE had in 2024-2025...</p>
        <p className="intro-text">
          <i>To view the entire album for a particular event, please click on its Event Card below!</i>
        </p>
      </section>

      {/* Grid Container */}
      <div className="grid-container">
        {events.map((event, index) => (
          <div className="img__wrap" key={index}>
            <a href={event.link} target="_blank" rel="noopener noreferrer">
              <img src={event.img} loading="eager" className="collage" alt="Event" />
              <div className="img__description_layer">
                <p className="img__description">{event.title}</p>
                <p className="img__description">{event.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearInReview2425;