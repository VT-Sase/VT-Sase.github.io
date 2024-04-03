import footerImage from '../assets/Logo.png';

const Footer: React.FC = () => {
  return (
    <footer style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#e8effa', 
      color: '#919090', 
      padding: '10px 20px',
      position: 'fixed',
      left: '0',
      bottom: '0',
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: '"Lato", sans-serif', 
      fontWeight: '650', 
    }}>
      <img src={footerImage} alt="Footer Logo" style={{ maxWidth: '100px' }} />
      <div style={{ textAlign: 'right' }}>
        © 2024 SASE at Virginia Tech<br />
        Society of Asian Scientists and Engineers
      </div>
    </footer>
  );
};

export default Footer;
