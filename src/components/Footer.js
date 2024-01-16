import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Contact info</h4>
            <p>
              Mirpur Shagufta Office<br />
              Plot 5008 Road 05: Ulack A<br />
              Shagufta Housing, Dhaka 1216
            </p>
            <p>
              Email: sales@ronpokar.com<br />
              Hotline: +88 01710 64 2525<br />
              Mobile: +88 01715 37 42 17
            </p>
          </div>
          <div className="col-md-4">
            <h4>Quick Contact</h4>
            <form>
              {/* Add form fields for name, email, etc. */}
            </form>
          </div>
          <div className="col-md-4">
            <h4>Find us on Google Map</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.546359525405!2d90.3543754154609!3d23.81585418546454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c759d546c52f%3A0x54d5f555b5775b35!2sRonpokar!5e0!3m2!1sen!2sbd!4v1668454605435!5m2!1sen!2sbd"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        </div>
        <div className="copyright">
          <p>Hoopor. All rights reserved</p>
          <ul className="nav">
            <li><a href="#">Webone Packages</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
