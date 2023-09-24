import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import twitter from "../assets/images/icon-twitter.svg";
import logo from "../assets/images/logo.svg";

function Footer() {
  return (
    <>
      <footer className="bg-[#FCFAF9]">
        <div className="px-10">
          <img src={logo} alt="logo"/>
          <p className="py-4">
            All rights reserved © Equalizer 2021 Have any problems? Contact us
            via social media or email us at equalizer@example.com
          </p>
          <div className="flex gap-4">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
