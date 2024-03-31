import footerImage from '../assets/Logo.png';


const Footer: React.FC = () => {
  return (
    <footer style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#000',
      color: '#fff',
      padding: '10px 20px',
      position: 'fixed',
      left: '0',
      bottom: '0',
      width: '100%',
      boxSizing: 'border-box', 
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
