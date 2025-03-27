import { FC } from 'react';
import styles from './Sponsors.module.css';

// Import sponsor images
import catLogo from '../assets/sponsors2025/CATLOGO2025.png';
import fritoLogo from '../assets/sponsors2025/FRITOLAY2025.png';
import nnlLogo from '../assets/sponsors2025/NNL2025.png';
import blueOriginLogo from '../assets/sponsors2025/BLUEORGIN2025.jpeg';
import altecLogo from '../assets/sponsors2025/ALTEC2025.jpeg';
import boeingLogo from '../assets/sponsors2025/BOEING2025.jpeg';
import cmtaLogo from '../assets/sponsors2025/CMTA2025.jpeg';
import textronLogo from '../assets/sponsors2025/TEXTRON2025.jpeg';

interface SponsorProps {
  name: string;
  logo: string;
  url: string;
  logoClass: string;
}

const Sponsor: FC<SponsorProps> = ({ name, logo, url, logoClass }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <img src={logo} className={logoClass} alt={`${name} Logo`} />
  </a>
);

const Sponsors: FC = () => {
  const diamondSponsors = [
    {
      name: 'Caterpillar',
      logo: catLogo,
      url: 'https://www.caterpillar.com'
    },
    {
      name: 'Frito Lay',
      logo: fritoLogo,
      url: 'https://www.fritolay.com/'
    },
    {
      name: 'NNL',
      logo: nnlLogo,
      url: 'https://navalnuclearlab.energy.gov/'
    },
    {
      name: 'Blue Origin',
      logo: blueOriginLogo,
      url: 'https://www.blueorigin.com/'
    }
  ];

  const goldSponsors = [
    {
      name: 'Altec',
      logo: altecLogo,
      url: 'https://www.altec.com/'
    },
    {
      name: 'Boeing',
      logo: boeingLogo,
      url: 'https://www.boeing.com/'
    }
  ];

  const bronzeSponsors = [
    {
      name: 'CMTA',
      logo: cmtaLogo,
      url: 'https://www.cmta.com/'
    },
    {
      name: 'TEXTRON',
      logo: textronLogo,
      url: 'https://www.textron.com/'
    }
  ];

  return (
    <section className={styles.sponsorsSection}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Sponsors</h1>
        <h2 className={styles.subtitle}>
          A special thanks to our sponsors for help making the mission of SASE possible here at Virginia Tech!
        </h2>
        
        <div>
          <h3 className={styles.tierTitle}>Diamond Sponsors</h3>
          <div className={styles.sponsorGrid}>
            {diamondSponsors.map((sponsor) => (
              <Sponsor
                key={sponsor.name}
                {...sponsor}
                logoClass={styles.diamondLogo}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className={styles.tierTitle}>Gold Sponsors</h3>
          <div className={styles.sponsorGrid}>
            {goldSponsors.map((sponsor) => (
              <Sponsor
                key={sponsor.name}
                {...sponsor}
                logoClass={styles.goldLogo}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className={styles.tierTitle}>Bronze Sponsors</h3>
          <div className={styles.sponsorGrid}>
            {bronzeSponsors.map((sponsor) => (
              <Sponsor
                key={sponsor.name}
                {...sponsor}
                logoClass={styles.bronzeLogo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
