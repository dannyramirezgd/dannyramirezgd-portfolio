import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <a href="https://www.github.com/dannyramirezgd"
          ><img
            class="logo bg-light mx-1"
            src={require('../../assets/images/githubIcon.png')}
            alt="github icon"
        /></a>
        <a href="https://www.linkedin.com/in/dannyramirezgd"
          ><img
            class="logo bg-light mx-1"
            src={require('../../assets/images/linkedInIcon.png')}
            alt="linkedIn icon"
        /></a>
        <a href="https://stackoverflow.com/users/17246201/danny-ramirezgd"
          ><img
            class="logo bg-light mx-1"
            src={require('../../assets/images/stackOverflowIcon.png')}
            alt="stack overflow icon"
        /></a>
        </div>
    )
}

export default Footer;