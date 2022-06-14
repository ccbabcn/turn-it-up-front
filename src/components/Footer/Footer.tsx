import { FooterStyles } from "./FooterStyles";

const Footer = (): JSX.Element => {
  return (
    <FooterStyles className="footer">
      <div className="footer__container">
        <span>
          Copyright ©2022 more info about turn it up created by cristian
          bermúdez
        </span>
        <div className="footer__row">
          <div className="footer__col">
            <ul>
              <li className="title">About</li>
              <li>The Web</li>
              <li>More Info</li>
              <li>Coming soon</li>
            </ul>
          </div>
          <div className="footer__col">
            <ul>
              <li className="title">Sponsors</li>
              <li>Music and more</li>
              <li>Theme Store</li>
              <li>Rednef</li>
            </ul>
          </div>
          <div className="footer__col">
            <ul>
              <li className="title">FAQs</li>
              <li>What project</li>
              <li>Which role</li>
              <li>More</li>
            </ul>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
