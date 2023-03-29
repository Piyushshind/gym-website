import React from 'react';
import {FaDumbbell} from 'react-icons/fa'
import { BackTop } from 'antd';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
        <FaDumbbell/>
          <a href="#hero">GYM</a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/" target='_blank'  rel="noreferrer" ><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com/" target='_blank'  rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/" target='_blank' rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.pinterest.com/" target='_blank' rel="noreferrer" ><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="https://www.instagram.com/" target='_blank' rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2023 GYM</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;