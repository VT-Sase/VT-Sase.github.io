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
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2022-2023/GBM-lunar-new-year.jpg",
    link: "https://www.facebook.com/media/set/?vanity=saseatvt&set=a.637934774999945",
    title: "SASE's Lunar New Year GBM (Image 3)",
    description: "Our wonderful Internal Vice-President Seneca" +
    "tests egg-protecting contraptions made by each of the groups! Most do not succeed, but it's the effort that" +
    "counts here!👍"
  },
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2022-2023/GBM-winter.jpg",
    link: "https://www.facebook.com/media/set/?vanity=saseatvt&set=a.695162109277211",
    title: "SASE Winter GBM",
    description: "A night where we hear our wonderful President Duy read" + 
    "an interesting MadLibs around a roaring fire!"
  },
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2022-2023/GBM-halloween.jpg",
    link: "https://www.facebook.com/media/set/?vanity=saseatvt&set=a.552235133569910",
    title: "SASE's Halloween GBM",
    description: "BOO! A night for all members to enjoy dress up in" + 
    "costumes, enjoy great tasing candy, and spookiness & surprises! "
  },
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2022-2023/mentor-mentee-reveal.jpg",
    link: "https://www.facebook.com/media/set/?vanity=saseatvt&set=a.550527290407361",
    title: "SASE's Mentor & Mentee Reveal",
    description: "This is it! The moment you have been waiting" + 
    "for...a night to love and happiness as SASE lineages grow! New and previous SASE mentors meet their new" + 
    "mentees!"
  },
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2022-2023/mentor-mentee-week-picnic-2.jpg",
    link: "https://www.facebook.com/media/set/?vanity=saseatvt&set=a.549387703854653",
    title: "SASE's Mentor & Mentee Bonding Week (Outdoor Picnic)",
    description: "A warm afternoon for" + 
    "mentors & mentees to enjoy the summer-like atmosphere, relax from studying and the other stresses of the" + 
    "life, and play sports as well as talk with their future SASE lineage members!"
  },
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2022-2023/mentor-mentee-week-scavenger-hunt.jpg",
    link: "https://www.facebook.com/media/set/?vanity=saseatvt&set=a.548470060613084",
    title: "SASE's Mentor & Mentee Bonding Week (Scavenger Hunt)",
    description: "An afternoon of bonding" +
    "with your SASE mentors/mentees/linage siblings through solving puzzles and looking for clues in a rigorous" +
    "scavenger hunt!"
  },
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2022-2023/mentor-mentee-week-game-night.jpg",
    link: "https://www.facebook.com/media/set/?vanity=saseatvt&set=a.547559694037454",
    title: "SASE's Mentor & Mentee Bonding Week (Game Night)",
    description: "A night of fun playing classic" + 
    "video games and board games with their potential SASE mentors/mentees/linage siblings!"
  },
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2022-2023/mentor-mentee-week-speed-dating.jpg",
    link: "https://www.facebook.com/media/set/?vanity=saseatvt&set=a.546726467454110",
    title: "SASE's Mentor & Mentee Bonding Week (Speed Dating)",
    description: "All of the nervous mentees and" +
    "anxious mentors are going around to talk and eventually join/build their respective lineages!"
  },
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2022-2023/GBM-back-to-school.jpg",
    link: "https://www.facebook.com/media/set/?vanity=saseatvt&set=a.521407833319307",
    title: "SASE's Back to School GBM",
    description: "Our members enjoying the new year, welcoming all of its joys and surprises!"
  },
  {
    img: "src/assets/img/year-in-review-compressed-smaller/2022-2023/2021-22-officer-board-honorable-mention.jpg",
    link: "https://www.facebook.com/saseatvt",
    title: "A Message to Our Previous Officer Board (2021-2022)",
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