import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function PicAndText () {
  <Button variant="contained">Hello world</Button>
  return <h1>using a function</h1>;
}

const About: React.FC = () => {
  return <>
    
    <h1>SASE About Page!</h1>
    <hr></hr>
    <PicAndText />
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
  </>;
};

export default About;
