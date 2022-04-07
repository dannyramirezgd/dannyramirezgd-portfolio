import React from 'react';
import profilePic from '../../assets/images/resizedProfilePic.jpg';

const About = () => {
  return (
    <section
      id="about-me"
      className="d-flex justify-content-center align-items-center flex-wrap"
    >
      <div className="col-12 col-md-6 col-xl-3 d-flex align-items-center justify-content-center">
        <img className="rounded-circle" src={profilePic} alt="profile" />
      </div>
      <div className="bio col-12 col-md-6 col-xl-3">
        <h2 className='text-center'>About Me</h2>
        <p className="fs-5">
          I am currently pursuing certification as a full stack web developer
          using skills in counseling and interpersonal development to create a
          more holistic approach to web design and client relations. I am known
          for successfully applying critical thinking and problem solving
          strengths to tackle any obstacle and find resolution efficiently and
          effectively. Using my leadership skills, I am able to bring a team of
          fellow students together to create a web application that employs a
          unique CSS framework, multiple server-side APIs, and interactive user
          engagement. I am comfortable working as a team and excited to apply my
          technical skills in a fast-paced, quality-driven team to build
          innovative and engaging experiences on the web.
        </p>
      </div>
    </section>
  );
};

export default About;
