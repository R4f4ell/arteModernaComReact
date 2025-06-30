import './styleFooter.scss';
import iconTwitter from '../../assets/images/iconTwitter.png';
import iconFacebook from '../../assets/images/iconFacebook.png';
import iconInstagram from '../../assets/images/iconInstagram.png';

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="footer__container">
        <div className="footer__brand">
          <p>Moment</p>
        </div>
        <div className="footer__info">
          <div className="footer__contact">
            <p className="footer__title">Contacts</p>
            <div className="footer__line">
              <p>Phone:</p>
              <p>123-456-7890</p>
            </div>
            <div className="footer__line">
              <p>Email:</p>
              <p>info@ayomide.com</p>
            </div>
          </div>
          <div className="footer__social">
            <p className="footer__title">Socials</p>
            <div className="footer__icons">
              <img src={iconTwitter} alt="Icon Twitter" />
              <img src={iconFacebook} alt="Icon Facebook" />
              <img src={iconInstagram} alt="Icon Instagram" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
