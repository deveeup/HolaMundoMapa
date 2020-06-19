import React from 'react';
import { useSelector } from 'react-redux';
import { ES_TEXTS, EN_TEXTS } from '../../constants';
const Footer = () => {
  const info = useSelector(state => state.user);

  const ES = ES_TEXTS;
  const EN = EN_TEXTS;
  return (
    <footer>
      <p>
        {info.langEN ? EN.footerText : ES.footerText }
        <a 
          href="https://www.linkedin.com/in/deveeup/"
          target="_blank"
        >
          @davidrojas
        </a>
      </p>
    </footer>
  );
};

export default Footer;
