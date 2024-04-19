import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// Class for club photos
class ClubPhoto {
  title: string;
  image: string;

  constructor(title: string, image: string) {
    this.title = title;
    this.image = image;
  }
}

// function to return html for club phot card
function showClubPhoto(p: ClubPhoto) {
  return <>
    <Card>
      <CardContent>
        <Typography>{p.title}</Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="800"
        image={p.image}
        alt={p.title}
      />
    </Card></>;
}

// instance of the club photos for years 22-23, 21-22, and 18-19
const pic22 = new ClubPhoto("VT SASE 2022 - 2023", "vanilla-sase-website\\assets\\img\\about\\2022-23-End-of-Year-GBM-Display-Image.jpg");
const pic21 = new ClubPhoto("VT SASE 2021 - 2022", "vanilla-sase-website\\assets\\img\\about\\2021-22-End-of-Year-GBM-Display-Image.jpg");
const pic18 = new ClubPhoto("VT SASE 2018 - 2019", "vanilla-sase-website\\assets\\img\\about\\idk.jpg");


// Class for reason/ main points to join SASE cards
class MainPoints {
  title: string;
  img: string;
  description: string;

  constructor(title: string, img: string, description: string) {
    this.title = title;
    this.img = img;
    this.description = description;
  }
}

// Actual component
const About: React.FC = () => {
  return (
    <>
      <h1>SASE About Page!</h1>
      <hr />

      <Grid container spacing={25}>{[
          {
            title: 'Community Service',
            img: 'vanilla-sase-website/assets/img/about/service-updated-big-event.png',
            description: 'SASE takes the values of community very seriously and is always looking for different opportunities to give back to the Southwest Virginia area.'
          },
          {
            title: 'Professional Events',
            img: 'vanilla-sase-website/assets/img/about/prof.jpg',
            description: 'SASE is always excited to host events with their sponsors to work on professional skills such as resume building and networking.'
          },
          {
            title: 'Mentor Mentee Program',
            img: 'vanilla-sase-website/assets/img/about/2022-23-Mentor-Mentee-Display-Image.jpg',
            description: 'SASE is glad to help create everlasting bonds between mentors and mentees while supporting their personal growth.'
          }
        ].map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 280 }}>
              <CardMedia
                sx={{ height: 240 }}
                component="img"
                height="200"
                image={item.img}
                alt={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    <br></br><hr></hr><br></br>
    {showClubPhoto(pic22)} <br></br>
    {showClubPhoto(pic21)} <br></br>
    {showClubPhoto(pic18)} <br></br>
    </>
  );
};

export default About;
