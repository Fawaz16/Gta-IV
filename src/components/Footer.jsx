import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <a href="#" class="footer-logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDuC9OfGsGFlKhs0fuocwKuHtDowtBHyjvF6kR0MRYQ&s"
              alt=""
            />
          </a>

          <p>The future of gaming is here</p>
          <ul className="social-links">
            <li>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h3 className="footer-heading">Navigation</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Character</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>
        </div>
        <div className="footer-login">
          <form>
            <h2>Login to account</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
            <button type="submit">Sign up</button>
          </form>
        </div>
        <div className="footer-copyright">
          <p>
            &copy; 2024 Rockstar Entertainment. All Reserved.Rockstar in US
            ansnd other countries
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
