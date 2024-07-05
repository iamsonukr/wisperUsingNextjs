import React from 'react';
import '../style/footer.css';
import '../../public/w.webp'
import '../assets/bc.jpg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="containerFooter">

        <div className="footer-section">
          <img width={100} src="https://previews.dropbox.com/p/thumb/ACVOO4guJb-FX1WNn1nqtVWgBOxKGe-xeB8vuXiM5px0d_NTSuoTV-ohAbDy5efgOJ4fbvFzeusf2XnMpqLpWsfo--Aj4TvsPLndW0v-2eLMAVq9RstLFRv8SStEtBBMQ0gnHMNG_OQQy0NcOabqrnOqXRNsJHr07OQ9cg0Gi4MA8xlN2Oi12QAqJe7ea-QIH_S5Pq1_R4UFmrKJn2_IUtN34mSFYSMJxuVOnn0NgrbRJ0J2zskxeU1kaMP13aKR1ABTpWzT5u4mM77kT_RK95Ceim3HBEYLmbdoyogLcvHnZJ_7_jVFwildZwsF84RAWN_lw6a_EST8-9nD7WJxwPt0/p.png" alt="d" />
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="footer-section">
          <h6>Quick Links</h6>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h6>Quick Links</h6>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h6>Quick Links</h6>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h6>Follow Us</h6>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Twitter">Youtube</a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
