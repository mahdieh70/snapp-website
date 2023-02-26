import React from "react";

//icons
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";
import { TbBrandTelegram } from "react-icons/tb";

//images
import logo from "../../assets/footerLogo/logo.png";
import namad from "../../assets/footerLogo/namad.png";

const Footer = () => {
  return (
    <div>
      <footer className="min-h-[388.75px] flex flex-col items-center justify-center pb-8 pt-10">
        <nav className="max-w-[1000px] flex flex-wrap justify-center pr-2 leading-[1.7]">
          <a href="#" className="footer-navLink ">
            فرصت&zwnj;های شغلی
          </a>
          <a href="#" className="footer-navLink ">
            بلاگ
          </a>
          <a href="#" className="footer-navLink ">
            شرایط و قوانین
          </a>
          <a href="#" className="footer-navLink ">
            پنل سازمانی
          </a>
          <a href="#" className="footer-navLink ">
            سوالات متداول
          </a>
          <a href="#" className="footer-navLink ">
            باشگاه رانندگان
          </a>
          <a href="#" className="footer-navLink ">
            ثبت نام راننده اسنپ
          </a>
          <a href="#" className="footer-navLink ">
            درباره ما
          </a>
          <a href="#" className="footer-navLink ">
            تماس با ما
          </a>
        </nav>
        <div className="flex flex-col flex-wrap justify-center leader-[1.7]">
          <div className="flex items-center justify-center my-4">
            <div>
              <SlSocialTwitter
                size={26}
                className=" leading-8 socialMedia-icon"
              />
            </div>
            <div>
              <SlSocialInstagram
                size={26}
                className=" leading-8 socialMedia-icon"
              />
            </div>
            <div>
              <SlSocialYoutube
                size={25}
                className=" leading-8 socialMedia-icon"
              />
            </div>
            <div>
              <CiLinkedin size={32} className=" leading-8 socialMedia-icon" />
            </div>
            <div>
              <TbBrandTelegram
                size={28}
                className=" leading-8 socialMedia-icon"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center px-1 leader-[1.7]">
            <div>
              <img
                src={logo}
                alt="logo"
                width={130}
                height={130}
                className="my-2"
              />
            </div>
            <div>
              <img
                src={namad}
                alt="namad"
                width={130}
                height={130}
                className="my-2"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
