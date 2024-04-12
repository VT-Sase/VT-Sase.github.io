//import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

/*function PicAndText () {
  <Button variant="contained">Hello world</Button>
  return <h1>using a function</h1>;
}*/

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
  return <>
    <h1>SASE About Page!</h1>
    <hr></hr>
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Professional Events
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sase has Professional Events (will elaborate later)
          </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="200"
        image="vanilla-sase-website\assets\img\about\prof.jpg"
        alt="Professional events"
      />
    </Card>
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Mentor Mentee Program
          </Typography>
          <Typography variant="body2" color="text.secondary">
             (will elaborate later)
          </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="200"
        image="vanilla-sase-website\assets\img\about\2022-23-Mentor-Mentee-Display-Image.jpg"
        alt="Professional events"
      />
    </Card>
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Community Service
          </Typography>
          <Typography variant="body2" color="text.secondary">
            (will elaborate later)
          </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="200"
        image="vanilla-sase-website\assets\img\about\service-updated-big-event.png"
        alt="Professional events"
      />
    </Card>

    <br></br><hr></hr><br></br>
    {showClubPhoto(pic22)} <br></br>
    {showClubPhoto(pic21)} <br></br>
    {showClubPhoto(pic18)} <br></br>
  </>;
};

export default About;
