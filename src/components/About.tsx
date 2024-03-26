//import '@fontsource/roboto/300.css';
//import '@fontsource/roboto/400.css';
//import '@fontsource/roboto/500.css';
//import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';

function PicAndText () {
  return <h1>using a function</h1>;
}

const About: React.FC = () => {
  return <>
    <Button variant="contained">Hello world</Button>
    <h1>SASE About Page!</h1>
    <hr></hr>
    <p>This will be an example paragraph. <br></br>
      This will be on the second line of the paragraph.</p>
    <PicAndText />
    <PicAndText></PicAndText>
  </>;
};

export default About;
