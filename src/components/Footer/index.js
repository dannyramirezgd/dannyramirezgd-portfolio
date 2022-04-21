import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a
        href="https://www.github.com/dannyramirezgd"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="logo bg-light mx-1"
          src={require('../../assets/images/githubIcon.png')}
          alt="github icon"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/dannyramirezgd"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="logo bg-light mx-1"
          src={require('../../assets/images/linkedInIcon.png')}
          alt="linkedIn icon"
        />
      </a>
      <a
        href="mailto:danny.ramirezgd@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="logo bg-light mx-1"
          src={require('../../assets/images/gmailIcon.png')}
          alt="stack overflow icon"
        />
      </a>
    </div>
  );
};

export default Footer;
