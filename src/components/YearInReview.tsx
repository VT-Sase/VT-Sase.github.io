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

const events: Event[] = [
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2022-2023/GBM-final.jpg",
    link: "https://www.facebook.com/photo?fbid=696990322427723&set=pcb.697032379090184",
    title: "SASE's Final/End-of-Year GBM - Celebrating our seniors with fun and laughter!",
    description: "As the year winds down, we enjoyed celebrating our Seniors graduating and" +
    "moving on the bigger and greater things! Everyone enjoyed the Spongebob-Squarepants theme" +
    "and the Senior Superlative Paper Plates! From all of us on the SASE Officer Board 2022-2023," +
    "it's been a great honor to serve this VT Chapter this year, and we look forward to seeing what next year holds!"
  },
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2022-2023/sase-gala.jpg",
    link: "https://www.facebook.com/media/set/?vanity=saseatvt&set=a.677997954326960",
    title: "SASE's Spring Gala - A banquet filled with delicious food and wonderful performances!",
    description: "Gala hosted this year was off-the-charts! Everyone from" + 
    "freshman, upperclassmen, to alumni showed up! A banquet filled with delicious food, sponsored by Lin" +
    "Yue Chuan, as well as excelling & outstanding performances by many SASE members! All of enjoyed the" +
    "night alongside old friends as well as had the opportunity to meet some new ones too!"
  },
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2022-2023/sase-coffeehouse-night.jpg",
    link: "https://www.facebook.com/media/set?vanity=saseatvt&set=a.695184142608341",
    title: "SASE at AASU Coffeenight",
    description: "Wow! We saw a great amount of wonderful performances from" +
    "our very own members as well ones from other Asian organizations! The talent was off the chart! All of our members" +
    "were shocked at the amount of skill and dedication displayed in the performances!" 
  },
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2022-2023/GBM-spring.jpg",
    link: "https://www.facebook.com/media/set?vanity=saseatvt&set=a.695184102608345",
    title: "SASE's 2nd Mentor-Mentee GBM ",
    description: "Spring has come! Cherry blossoms, beautiful nature outside, and" +  
    "the warm weather is here to stay! But also it brings human Bop-It and Origami? This GBM was full of excitement" + 
    "and delightful surprises!"
  },
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2022-2023/GBM-lunar-new-year-3.jpg",
    link: "https://www.facebook.com/media/set/?vanity=saseatvt&set=a.637934774999945",
    title: "SASE's Lunar New Year GBM (Image 1) ",
    description: "We welcome our new SASE Interns for the spring" +  
    "semester! The entire SASE officer board wishes you a Happy Lunar New Year 2023!"
  },
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2022-2023/GBM-lunar-new-year-2.jpg",
    link: "https://www.facebook.com/media/set/?vanity=saseatvt&set=a.637934774999945",
    title: "SASE's Lunar New Year GBM (Image 2)",
    description: "Our members enjoying the new year, welcoming all of its joys and surprises!"
  },
];

const YearInReview: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <section className="header">
        <h2>Year in Review</h2>
      </section>

      <section className="year-in-review-intro">
        <p>A look back on the eventful year SASE had in 2022-2023...</p>
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

export default YearInReview;